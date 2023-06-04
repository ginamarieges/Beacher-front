import { renderWithProviders } from "../../utils/testUtils";
import { vi } from "vitest";
import Button from "./Button";
import { screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it receives the text 'Hello'", () => {
    test("Then it should show a button with the text 'Hello'", () => {
      const buttonText = "Hello";
      const actionOnClick = vi.fn();

      renderWithProviders(
        <Button actionOnClick={actionOnClick} className="" text={buttonText} />
      );

      const button = screen.getByRole("button", { name: buttonText });

      expect(button).toBeInTheDocument();
    });
  });
});
