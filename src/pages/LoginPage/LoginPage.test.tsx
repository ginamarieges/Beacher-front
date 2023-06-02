import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import { server } from "../../mocks/server";
import { errorHandlers } from "../../mocks/handlers";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../routers/paths/paths";
import { LoginPageLazy } from "../../routers/lazyPages";

describe("Given a LoginPage page", () => {
  const passwordPlacholder = /password/i;
  const usernamePlaceholder = /username/i;
  const buttonText = /login/i;
  describe("When  it is rendered", () => {
    test("Then it should show a heading with the text 'Beacher'", async () => {
      const expectedText = /beacher/i;

      renderWithProviders(wrapWithRouter(<LoginPageLazy />));

      const heading = await waitFor(() =>
        screen.getByRole("heading", { name: expectedText })
      );

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and receives a valid user credentials", () => {
    test("Then it should redirect to home page", async () => {
      const routes: RouteObject[] = [
        { path: "/", element: <LoginPage /> },
        { path: paths.home },
      ];

      const routerLogin = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={routerLogin} />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlacholder);
      const loginButton = screen.getByRole("button", { name: buttonText });
      const username = "admin";
      const password = "admin";

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(loginButton);

      expect(routerLogin.state.location.pathname).toBe(paths.home);
    });
  });

  describe("When it is rendered and id receives invalid credentials", () => {
    test("Then it should stay in loginPage", async () => {
      server.resetHandlers(...errorHandlers);

      const routes: RouteObject[] = [
        {
          path: "/",
          element: <LoginPage />,
        },
        { path: paths.login },
      ];

      const testRouter = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={testRouter} />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlacholder);
      const loginButton = screen.getByRole("button", { name: buttonText });
      const username = "notAdmin";
      const password = "notRealPassword";

      await userEvent.type(usernameInput, username);
      await userEvent.type(passwordInput, password);
      await userEvent.click(loginButton);

      expect(testRouter.state.location.pathname).toBe(paths.login);
    });
  });
});
