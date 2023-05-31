import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a input with username text and an input with the password text", () => {
      const usernamePlaceholder = "USERNAME";
      const passwordPlaceholder = "PASSWORD";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOGIN'", () => {
      const buttonText = "login";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const loginButton = screen.getByRole("button", { name: buttonText });

      expect(loginButton).toBeInTheDocument();
    });
  });
});
