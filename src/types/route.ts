import { routes } from "../constants"

export type Route = keyof typeof routes

export type Routes = ReadonlyArray<Route>

export type Params = Record<string, string> | string
