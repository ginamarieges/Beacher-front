import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import AddBeachPage from "./AddBeachPage";

describe("Given a AddBeachPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'ADD BEACH'", () => {
      const headingText = /add beach/i;

      renderWithProviders(<AddBeachPage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
