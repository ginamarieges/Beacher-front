import { RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../components/App/App.js";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
  },
];

const appRouter = createBrowserRouter(routes);

export default appRouter;
