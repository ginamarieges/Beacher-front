import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateBeachPage from "./UpdateBeachPage";

describe("Given an UpdateBeachPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Modify beach'", () => {
      const expectedText = "Modify beach";

      renderWithProviders(wrapWithRouter(<UpdateBeachPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
