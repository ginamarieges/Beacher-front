import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginPage from "./LoginPage";

describe("Given a LoginPage page", () => {
  describe("When  it is rendered", () => {
    test("Then it should show a heading with the text 'Beacher'", () => {
      const expectedText = /beacher/i;

      renderWithProviders(wrapWithRouter(<LoginPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
