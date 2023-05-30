import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Header from "./Header.js";
import renderWithProviders from "../../utils/testUtils.js";
import { screen } from "@testing-library/react";
describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Beacher logo", () => {
      const routes = [
        {
          path: "/",
          element: <Header />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const expectedAlternativeText = "beacher logo";

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
