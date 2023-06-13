import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import Layout from "./Layout";
import { UiStructure } from "../../store/ui/types";
import { store } from "../../store";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the Beacher logo", () => {
      renderWithProviders(wrapWithRouter(<Layout />));

      const expectedAlternativeText = "beacher logo";

      const logo = screen.getByAltText(expectedAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered and isLoading is true", () => {
    test("Then it should show a loader", () => {
      const uiState: UiStructure = {
        isLoading: true,
        modal: {
          isVisible: false,
          isError: false,
          message: "",
        },
        page: 1,
      };

      renderWithProviders(wrapWithRouter(<Layout />), { uiStore: uiState });

      const loader = screen.getByRole("generic", { name: "loader" });

      expect(loader).toBeInTheDocument();
    });
  });
});

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

      const visible = store.getState().uiStore.modal.isVisible;

      expect(visible).toBe(false);
    });
  });
});
