import { RouterProvider } from "react-router-dom";
import { renderWithProviders } from "../utils/testUtils";
import appRouter from "./appRouter";
import { screen } from "@testing-library/react";

localStorage.removeItem("token");

describe("Given an appRouter", () => {
  describe("When it is rendered and exists a token in the local storage", () => {
    test("Then it should show beacher logo", () => {
      const logoAlternativeText = /welcome/i;
      const uiStore = {
        isLoading: false,
        modal: { isVisible: true, isError: false, message: "Welcome" },
        page: 1,
      };

      renderWithProviders(<RouterProvider router={appRouter} />, { uiStore });

      const logo = screen.getByText(logoAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
