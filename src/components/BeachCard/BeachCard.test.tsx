import { screen } from "@testing-library/react";
import { getBeachMock } from "../../mocks/factories/beach/beachFactory";
import { BeachStructure } from "../../store/beaches/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BeachCard from "./BeachCard";

describe("Given a BeachCard component", () => {
  describe("When it receives the Sitges beach data", () => {
    const mockBeach: BeachStructure = getBeachMock({ name: "Sitges" });
    const userId = "67t8ghwne0f8cwhgn";
    test("Then it should show a heading with Sitges", () => {
      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="lazy" beach={mockBeach} />
        )
      );

      const heading = screen.getByRole("heading", { name: mockBeach.name });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a Sitges picture", () => {
      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="eager" beach={mockBeach} />
        )
      );
      const image = screen.getByRole("img", {
        name: mockBeach.name,
      });

      expect(image).toBeInTheDocument();
    });
  });
});
