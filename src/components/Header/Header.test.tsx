import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils.js";
import { screen } from "@testing-library/react";
import Header from "./Header.js";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Beacher logo", () => {
      renderWithProviders(wrapWithRouter(<Header />));

      const expectedAlternativeText = "beacher logo";

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
