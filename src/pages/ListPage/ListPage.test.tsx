import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import ListPage from "./ListPage";

describe("Given a LisPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome! Find your perfect beach for today'", () => {
      const expectedText = "Welcome! Find your perfect beach for today";

      renderWithProviders(wrapWithRouter(<ListPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
