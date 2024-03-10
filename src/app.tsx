import { component$ } from "@builder.io/qwik"
import { useRouter } from "./utils"

export const App = component$(() => {
  const currentRoute = useRouter()

  return currentRoute
})
