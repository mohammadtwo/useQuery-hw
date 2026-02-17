import type { JSX } from "react";
import { HomePage } from "../pages/home/homePage"
import { CreateUser } from "../components/createUser/createUser";

export const pathRouters = {
  home: "/",
  createUser: "/createUser",
  editeUser: "edit/:id",
};
export const routesArray: { path: string; element: JSX.Element }[] = [
  { path: pathRouters.home, element: <HomePage/> },
  { path: pathRouters.createUser, element: <CreateUser/> },
  { path: pathRouters.editeUser, element: <CreateUser/> },
];