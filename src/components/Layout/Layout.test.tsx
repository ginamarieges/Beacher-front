import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { UiStructure } from "../../store/ui/types";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Beacher logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAlternativeText = "beacher logo";

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered and isLoading is true", () => {
    test("Then it should show a loader", () => {
      const uiState: UiStructure = {
        isLoading: true,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
      };

      renderWithProviders(wrapWithRouter(<Layout />), { uiStore: uiState });

      const loader = screen.getByRole("generic", { name: "loader" });

      expect(loader).toBeInTheDocument();
    });
  });
});
