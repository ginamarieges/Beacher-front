import { lazy } from "react";

export const LoginPageLazy = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);
