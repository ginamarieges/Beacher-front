import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UiStructure } from "../../store/ui/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "../Layout/Layout";

describe("Given a Modal component", () => {
  describe("When it is rendered and the button it's clicked", () => {
    test("Then it should disappear the modal", async () => {
      const uiState: UiStructure = {
        isLoading: false,
        modal: {
          isVisible: true,
          isError: true,
          message: "Something went wrong",
        },
        page: 1,
      };
      const buttonText = "close button";

      renderWithProviders(wrapWithRouter(<Layout />), {
        uiStore: uiState,
      });

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
