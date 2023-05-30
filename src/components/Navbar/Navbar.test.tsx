import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { screen } from "@testing-library/react";
import Navbar from "./Navbar.js";
import renderWithProviders from "../../utils/testUtils.js";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show three links", () => {
      const routes = [
        {
          path: "/",
          element: <Navbar />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const homeLink = screen.getByRole("link", { name: "home" });
      const addBeachLink = screen.getByRole("link", { name: "add-beach" });
      const logoutButton = screen.getByRole("button", { name: "logout" });

      expect(homeLink).toBeInTheDocument();
      expect(addBeachLink).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
    });
  });
});
