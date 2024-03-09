import { JSXOutput, useSignal, useTask$ } from "@builder.io/qwik"
import { Home } from "../pages"

const routes = {
  "": <Home />,
}

type Route = keyof typeof routes

export const navigateTo = (route: Route): void => {
  window.history.pushState({}, "", route)
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
