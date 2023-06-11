import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Pagination from "./Pagination";
import { vi } from "vitest";

describe("Given a Pagination component", () => {
  const previousButtonLabel = /previous-button/i;
  const nextButtonLabel = /next-button/i;
  const nextPage = vi.fn();
  const previousPage = vi.fn();
  const totalBeaches = 25;

  describe("When it is rendered in th first page", () => {
    test("Then the previous button should be hidden and the next button should be visible", () => {
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            page={1}
            nextPage={nextPage}
            previousPage={previousPage}
            totalBeaches={totalBeaches}
          />
        )
      );

      const previousButton = screen.getByLabelText(previousButtonLabel);
      const nextButton = screen.getByLabelText(nextButtonLabel);

      expect(previousButton).not.toBeVisible();
      expect(nextButton).toBeVisible();
    });
  });

  describe("When it is rendered and the user cliks the next button", () => {
    test("Then it should call the nextPage function", async () => {
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            page={1}
            nextPage={nextPage}
            previousPage={previousPage}
            totalBeaches={totalBeaches}
          />
        )
      );

      const nextButton = screen.getByLabelText(nextButtonLabel);

      await userEvent.click(nextButton);

      expect(nextPage).toHaveBeenCalled();
    });
  });

  describe("When it is rendered and the user cliks the previous button", () => {
    test("Then it should call the function previousPage", async () => {
      renderWithProviders(
        wrapWithRouter(
          <Pagination
            page={2}
            nextPage={nextPage}
            previousPage={previousPage}
            totalBeaches={totalBeaches}
          />
        )
      );

      const previousButton = screen.getByLabelText(previousButtonLabel);

      await userEvent.click(previousButton);

      expect(previousPage).toHaveBeenCalled();
    });
  });
});
