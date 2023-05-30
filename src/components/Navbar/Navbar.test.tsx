import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Navbar from "./Navbar.js";
import theme from "../../styles/theme.js";

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

      render(
        <ThemeProvider theme={theme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      );

      const homeLink = screen.getByRole("link", { name: "home" });
      const addBeachLink = screen.getByRole("link", { name: "add-beach" });
      const logoutLink = screen.getByRole("link", { name: "logout" });

      expect(homeLink).toBeInTheDocument();
      expect(addBeachLink).toBeInTheDocument();
      expect(logoutLink).toBeInTheDocument();
    });
  });
});
