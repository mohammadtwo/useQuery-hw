import type { JSX } from "react";
import { HomePage } from "../pages/home/homePage"

const pathRouters={home:"/"}
export const routesArray: { path: string; element: JSX.Element }[] = [
  { path: pathRouters.home, element: <HomePage/> },
];