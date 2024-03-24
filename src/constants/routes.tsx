import {
  Home,
  Lesson1,
  Lesson2,
  Lesson3,
  Lesson4,
  Lesson5,
  Lesson6,
} from "../pages"
import { Routes } from "../types"

export const routes = {
  "": <Home />,
  "1": <Lesson1 />,
  "2": <Lesson2 />,
  "3": <Lesson3 />,
  "4": <Lesson4 />,
  "5": <Lesson5 />,
  "6": <Lesson6 />,
}

export const routeNames = Object.keys(routes) as Routes

export const menuElements = routeNames.filter((route) => route !== "")
