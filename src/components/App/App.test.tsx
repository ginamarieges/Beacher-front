import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { UiStructure } from "../../store/ui/types";
import { renderWithProviders } from "../../utils/testUtils";
import App from "./App";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a Modal component", () => {
  describe("When it is rendered and the button it's clicked", () => {
    test("Then it should disappear the modal", async () => {
      const routes = [
        {
          path: "/",
          element: <App />,
        },
      ];

      const router = createMemoryRouter(routes);

      const uiState: UiStructure = {
        isLoading: false,
        isError: true,
        message: "Something went wrong",
      };
      const buttonText = "close button";

      renderWithProviders(<RouterProvider router={router} />, {
        uiStore: uiState,
      });

      const button = screen.getByRole("button", { name: buttonText });

      await userEvent.click(button);

      expect(button).not.toBeInTheDocument();
    });
  });
});
