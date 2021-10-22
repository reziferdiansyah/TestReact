import { List } from "pages";
import { Login } from "pages";
import { Register } from "pages";
export const routers = [
  { path: "/login", Component: Login, isExact: true },
  { path: "/", Component: Register, isExact: true },
  { path: "/list", Component: List, isExact: true },
];
