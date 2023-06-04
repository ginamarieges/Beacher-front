import { lazy } from "react";

export const LoginPageLazy = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);

export const ListPageLazy = lazy(() => import("../pages/ListPage/ListPage.js"));
