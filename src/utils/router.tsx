import { JSXOutput, useSignal, useTask$ } from "@builder.io/qwik"
import { routeNames, routes } from "../constants"
import { Params, Route } from "../types"

export const checkUrlParam = (param: string): boolean =>
  new URLSearchParams(window.location.search).has(param)

export const getPath = (route: Route, params?: Params): string =>
  params ? `${route}?${new URLSearchParams(params).toString()}` : route

export const navigateTo = (route: Route, params?: Params): void => {
  window.history.pushState({}, "", getPath(route, params))
  dispatchEvent(new PopStateEvent("popstate"))
}

const getCurrentRoute = (): Route =>
  window.location.pathname.replaceAll("/", "") as Route

export const useRouter = (defaultRoute: Route = ""): JSXOutput => {
  const currentRouteSignal = useSignal<Route>(defaultRoute)

  useTask$(() => {
    window.onpopstate = () => (currentRouteSignal.value = getCurrentRoute())
    const route = getCurrentRoute()
    if (route === currentRouteSignal.value) return
    if (routeNames.includes(route)) {
      currentRouteSignal.value = route
    } else if (route) {
      window.history.replaceState({}, "", `/${defaultRoute}`)
    }
  })

  return routes[currentRouteSignal.value]
}
