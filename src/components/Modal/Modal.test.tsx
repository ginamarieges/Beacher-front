import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Modal from "./Modal";

describe("Given a Modal component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a close button", () => {
      const buttonText = "close button";

      renderWithProviders(wrapWithRouter(<Modal />));

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
