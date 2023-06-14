import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

describe("Given an appRouter", () => {
  describe("When it is rendered and the modal property isVisible is true", () => {
    test("Then it should show the modal text", () => {
      const modalText = /welcome/i;
      const uiStore = {
        isLoading: false,
        modal: { isVisible: true, isError: false, message: "Welcome" },
        page: 1,
      };

      renderWithProviders(<RouterProvider router={appRouter} />, { uiStore });

      const modal = screen.getByText(modalText);

      expect(modal).toBeInTheDocument();
    });
  });
});
