import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar.js";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils.js";
import {
  RouteObject,
  RouterProvider,
  createMemoryRouter,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/theme/theme.js";
import { store } from "../../store/index.js";
import { Provider } from "react-redux";
import GlobalStyle from "../../styles/GlobalStyle/GlobalStyle.js";
import { paths } from "../../routers/paths/paths.js";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the home, add beach and logout link", () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const homeLink = screen.getByRole("link", { name: "home" });
      const addBeachLink = screen.getByRole("link", { name: "add-beach" });
      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(homeLink).toBeInTheDocument();
      expect(addBeachLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the logout button is clicked", () => {
    test("Then it should call the logout function", async () => {
      const routes: RouteObject[] = [{ path: "/", element: <Navbar /> }];

      const router = createMemoryRouter(routes);

      render(
        <ThemeProvider theme={theme}>
          <Provider store={store}>
            <GlobalStyle />
            <RouterProvider router={router} />
          </Provider>
        </ThemeProvider>
      );

      const button = screen.getByLabelText("logout");

      await userEvent.click(button);

      expect(router.state.location.pathname).toBe(paths.login);
    });
  });
});
