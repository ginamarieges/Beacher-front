import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import RegisterPage from "./RegisterPage";

describe("Given a RegisterPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading BEACHER", () => {
      const headingText = /beacher/i;

      renderWithProviders(wrapWithRouter(<RegisterPage />));

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the heading 'Register now!'", () => {
      const headingText = "Register now!";

      renderWithProviders(wrapWithRouter(<RegisterPage />));

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
