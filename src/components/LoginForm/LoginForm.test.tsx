import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import LoginForm from "./LoginForm";

describe("Given a LoginForm component", () => {
  const usernamePlaceholder = /username/i;
  const passwordPlaceholder = /password/i;
  const buttonText = /login/i;
  describe("When it is rendered", () => {
    test("Then it should show a input with username text and an input with the password text", () => {
      renderWithProviders(wrapWithRouter(<LoginForm />));

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOGIN'", () => {
      renderWithProviders(wrapWithRouter(<LoginForm />));

      const loginButton = screen.getByRole("button", { name: buttonText });

      expect(loginButton).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the username and password input aren't empty", () => {
    test("Then it should show the login button enabled", async () => {
      const usenrameText = "hello";
      const passwordText = "alo";

      renderWithProviders(wrapWithRouter(<LoginForm />));

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      const loginButton = screen.getByRole("button", {
        name: buttonText,
      });

      await userEvent.type(usernameInput, usenrameText);
      await userEvent.type(passwordInput, passwordText);

      expect(loginButton).toBeEnabled();
    });
  });
});
