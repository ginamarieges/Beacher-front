import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App.js";
import { paths } from "./paths/paths.js";
import { LoginPageLazy } from "./lazyPages.js";
import { Suspense } from "react";
import ListPage from "../pages/ListPage/ListPage.js";

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
      { path: paths.home, element: <ListPage /> },
    ],
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
