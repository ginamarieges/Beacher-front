import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { paths } from "../../routers/paths/paths";

describe("Given a LoginPage page", () => {
  describe("When  it is rendered", () => {
    test("Then it should show a heading with the text 'Beacher'", () => {
      const expectedText = /beacher/i;

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

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

      const passwordPlacholder = /password/i;
      const usernamePlaceholder = /username/i;
      const buttonText = /login/i;

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
});
