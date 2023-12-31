import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar.js";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils.js";
import { loginUser } from "../../mocks/userMocks.js";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { store } from "../../store/index.js";

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
    test("Then it should disappear the logout button", async () => {
      const routes = [
        {
          path: "/",
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        userStore: loginUser,
      });

      const logoutButton = screen.getByRole("button", { name: "logout" });

      await userEvent.click(logoutButton);

      expect(logoutButton).not.toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user click's the add beach button", () => {
    test("Then it should show a heading with the text 'ADD BEACH'", async () => {
      renderWithProviders(wrapWithRouter(<Navbar />));

      const addBeachLink = screen.getByRole("link", { name: "add-beach" });

      await userEvent.click(addBeachLink);

      expect(location.pathname).toStrictEqual("/");
    });
  });

  describe("When it is rendered and the user clicks the home icon", () => {
    test("Then it should go to page 1", async () => {
      const expectedPage = 1;
      renderWithProviders(wrapWithRouter(<Navbar />));

      const homeLink = screen.getByRole("link", { name: "home" });

      await userEvent.click(homeLink);

      const page = store.getState().uiStore.page;

      expect(page).toBe(expectedPage);
    });
  });
});
