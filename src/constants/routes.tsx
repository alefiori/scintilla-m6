import { Home, Lesson1, Lesson2, Lesson3 } from "../pages"
import { Routes } from "../types"

export const routes = {
  "": <Home />,
  "1": <Lesson1 />,
  "2": <Lesson2 />,
  "3": <Lesson3 />,
}

export const routeNames = Object.keys(routes) as Routes
