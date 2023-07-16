import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App.js";
import { paths } from "./paths/paths.js";
import {
  AddBeachPageLazy,
  DetailsPageLazy,
  ListPageLazy,
  LoginPageLazy,
  RegisterPageLazy,
} from "./lazyPages.js";
import { Suspense } from "react";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage.js";
import UpdateBeachPage from "../pages/UpdateBeachPage/UpdateBeachPage.js";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to={paths.login} replace />,
      },
      {
        path: paths.login,
        element: (
          <Suspense>
            <LoginPageLazy />
          </Suspense>
        ),
      },
      {
        path: paths.register,
        element: (
          <Suspense>
            <RegisterPageLazy />
          </Suspense>
        ),
      },
      {
        path: paths.home,
        element: (
          <Suspense>
            <ListPageLazy />
          </Suspense>
        ),
      },
      {
        path: paths.addBeach,
        element: (
          <Suspense>
            <AddBeachPageLazy />
          </Suspense>
        ),
      },
      {
        path: `${paths.beaches}/:id`,
        element: (
          <Suspense>
            <DetailsPageLazy />
          </Suspense>
        ),
      },
      { path: paths.updateBeach, element: <UpdateBeachPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
