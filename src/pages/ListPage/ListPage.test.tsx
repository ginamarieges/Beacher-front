import { screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { loginUser } from "../../mocks/userMocks";
import { server } from "../../mocks/server";
import { buttonsHandlers } from "../../mocks/handlers";

describe("Given a LisPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome! Find your perfect beach for today'", () => {
      const user = loginUser;
      const expectedText = `Welcome ${user.name}! Find your perfect beach for today`;

      renderWithProviders(<ListPage />, {
        userStore: user,
      });

      const title = screen.getByText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });

  describe("When it is rendered page 3 and the user clicks next button", () => {
    test("Then the button should be disabled", async () => {
      server.resetHandlers(...buttonsHandlers);
      const nextButtonLabel = /next-button/i;

      renderWithProviders(<ListPage />);

      const nextButton = screen.getByLabelText(nextButtonLabel);

      await userEvent.click(nextButton);

      waitFor(() => {
        expect(nextButton).toBeDisabled();
      });
    });
  });

  describe("When it is rendered in page 3 and user clicks the previous button", () => {
    test("Then the button should be enabled", async () => {
      server.resetHandlers(...buttonsHandlers);
      const previousButtonLabel = /previous-button/i;

      renderWithProviders(<ListPage />);

      const previousButton = screen.getByLabelText(previousButtonLabel);

      await userEvent.click(previousButton);

      waitFor(() => {
        expect(previousButton).toBeEnabled();
      });
    });
  });
});
