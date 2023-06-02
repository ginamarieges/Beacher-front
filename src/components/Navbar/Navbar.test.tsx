import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "./Navbar.js";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils.js";
import { loginUser } from "../../mocks/userMocks.js";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

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
});
