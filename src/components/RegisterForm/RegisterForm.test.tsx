import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import RegisterForm from "./RegisterForm";

describe("Given a RegisterForm component", () => {
  const usernamePlaceholder = "USERNAME";
  const passwordPlaceholder = "PASSWORD";
  const namePlaceholder = "NAME";
  const surnamePlaceholder = "SURNAME";
  const emailPlaceholder = "EMAIL";
  const repeatPasswordPlaceholder = "REPEAT PASSWORD";
  const textButton = /register/i;

  describe("When it is rendered", () => {
    test("Then it should show the name, surname, email, password, repeat password, and username fields", () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      const nameInput = screen.getByPlaceholderText(namePlaceholder);
      const surnameInput = screen.getByPlaceholderText(surnamePlaceholder);
      const emailInput = screen.getByPlaceholderText(emailPlaceholder);
      const repeatPasswordInput = screen.getByPlaceholderText(
        repeatPasswordPlaceholder
      );

      expect(usernameInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(surnameInput).toBeInTheDocument();
      expect(repeatPasswordInput).toBeInTheDocument();
    });

    test("Then it should show the register button", () => {
      renderWithProviders(<RegisterForm />);

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    test("Then the button should be disabled", () => {
      renderWithProviders(<RegisterForm />);

      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the user types all fields and the password matches and the user clicks the button", () => {
    test("Then the button should be disabled", async () => {
      renderWithProviders(<RegisterForm />);

      const usernameInput = screen.getByPlaceholderText(usernamePlaceholder);
      const passwordInput = screen.getByPlaceholderText(passwordPlaceholder);
      const nameInput = screen.getByPlaceholderText(namePlaceholder);
      const surnameInput = screen.getByPlaceholderText(surnamePlaceholder);
      const emailInput = screen.getByPlaceholderText(emailPlaceholder);
      const repeatPasswordInput = screen.getByPlaceholderText(
        repeatPasswordPlaceholder
      );

      await userEvent.type(usernameInput, "alo32");
      await userEvent.type(passwordInput, "432fr5");
      await userEvent.type(nameInput, "joana");
      await userEvent.type(surnameInput, "perez");
      await userEvent.type(emailInput, "p@gmail.com");
      await userEvent.type(repeatPasswordInput, "432fr5");

      const button = screen.getByRole("button", { name: textButton });

      await userEvent.click(button);

      expect(button).toBeDisabled();
    });
  });
});
