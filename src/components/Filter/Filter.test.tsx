import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Filter from "./Filter";

describe("Given a Filter component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a select field", () => {
      const labelText = /region-selector/i;
      renderWithProviders(<Filter />);

      const selector = screen.getByLabelText(labelText);

      expect(selector).toBeInTheDocument();
    });
  });
});
