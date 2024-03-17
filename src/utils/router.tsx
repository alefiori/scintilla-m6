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
