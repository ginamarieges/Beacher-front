import { lazy } from "react";

export const LoginPageLazy = lazy(
  () => import("../pages/LoginPage/LoginPage.js")
);

export const RegisterPageLazy = lazy(
  () => import("../pages/RegisterPage/RegisterPage.js")
);

export const ListPageLazy = lazy(() => import("../pages/ListPage/ListPage.js"));

export const AddBeachPageLazy = lazy(
  () => import("../pages/AddBeachPage/AddBeachPage.js")
);

export const DetailsPageLazy = lazy(
  () => import("../pages/DetailsPage/DetailsPage.js")
);
