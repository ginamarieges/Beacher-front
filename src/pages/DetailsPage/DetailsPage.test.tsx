import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import DetailsPage from "./DetailsPage";

describe("Given a DetailsPage page", () => {
  describe("When it is rendered and receives Aiguafreda beach", () => {
    test("Then it should show a heading with aiguafreda", () => {
      const headingText = /aiguafreda/i;

      renderWithProviders(<DetailsPage />);

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show the buttons delete and modify", () => {
      const deleteText = /delete/i;
      const modifyText = /modify/i;

      renderWithProviders(<DetailsPage />);

      const deleteButton = screen.getByRole("button", { name: deleteText });
      const modifyButton = screen.getByRole("button", { name: modifyText });

      expect(deleteButton).toBeInTheDocument();
      expect(modifyButton).toBeInTheDocument();
    });
  });
});
