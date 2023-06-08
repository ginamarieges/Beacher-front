import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";
import { UiStructure } from "../../store/ui/types";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a close button", () => {
      const buttonText = "close button";

      renderWithProviders(wrapWithRouter(<Modal />));

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the property isError is true", () => {
    test("Then it should show an error feedback", () => {
      const uiState: UiStructure = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Something went wrong",
          isVisible: true,
        },
      };
      const expectedText = uiState.modal.message;

      renderWithProviders(<Modal />, { uiStore: uiState });

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });
});
