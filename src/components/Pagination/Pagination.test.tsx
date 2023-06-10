import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";

describe("Given a Pagination component", () => {
  describe("When it is rendered in th first page", () => {
    test("Then the previous button should be hidden and the next button should be visible", () => {
      const previousButtonLabel = /previous-button/i;
      const nextButtonLabel = /next-button/i;

      renderWithProviders(wrapWithRouter(<Pagination />));

      const previousButton = screen.getByLabelText(previousButtonLabel);
      const nextButton = screen.getByLabelText(nextButtonLabel);

      expect(previousButton).not.toBeVisible();
      expect(nextButton).toBeVisible();
    });
  });
});
