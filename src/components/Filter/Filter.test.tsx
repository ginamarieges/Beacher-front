import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import Filter from "./Filter";
import { vi } from "vitest";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select field", () => {
      const labelText = /region-selector/i;
      const setPage = vi.fn();
      renderWithProviders(<Filter setPage={setPage} />);

      const selector = screen.getByLabelText(labelText);

      expect(selector).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user selects 'Baix Empodà'", () => {
    test("Then it should show the value 'Baix Empordà'", async () => {
      const labelText = /region-selector/i;
      const regionSelected = "Baix Empordà";
      const setPage = vi.fn();
      renderWithProviders(<Filter setPage={setPage} />);

      const selector = screen.getByLabelText(labelText);
      await userEvent.selectOptions(selector, regionSelected);

      expect(selector).toHaveValue(regionSelected);
    });
  });
});
