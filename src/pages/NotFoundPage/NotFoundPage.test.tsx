import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import NotFoundPage from "./NotFoundPage";

describe("Given a NotFoundPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a logout button", () => {
      const logoutIcon = /logout icon/i;

      renderWithProviders(wrapWithRouter(<NotFoundPage />));

      const button = screen.getByRole("img", { name: logoutIcon });

      expect(button).toBeInTheDocument();
    });
  });
});
