import { JSXOutput, useSignal, useTask$ } from "@builder.io/qwik"
import { Home, Lesson1, Lesson2 } from "../pages"

const routes = {
  "": <Home />,
  "1": <Lesson1 />,
  "2": <Lesson2 />,
}

type Route = keyof typeof routes

export const menuElements = Object.keys(routes).filter(
  (route) => route !== ""
) as ReadonlyArray<Route>

export const checkUrlParam = (param: string): boolean =>
  new URLSearchParams(window.location.search).has(param)

export const getPath = (
  route: Route,
  params?: string | Record<string, string>
): string => {
  if (params) {
    route += "?" + new URLSearchParams(params).toString()
  }
  return route
}

export const navigateTo = (
  route: Route,
  params?: string | Record<string, string>
): void => {
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
    if (Object.keys(routes).includes(route)) {
      currentRouteSignal.value = route
    } else if (route) {
      window.history.replaceState({}, "", `/${defaultRoute}`)
    }
  })

  return routes[currentRouteSignal.value]
}
