import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";

describe("Given a Form component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the name, town and image input", () => {
      const labelName = /name/i;
      const labelTown = /town/i;
      const labelImage = /image/i;

      renderWithProviders(<Form />);

      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);

      expect(nameInput).toBeInTheDocument();
      expect(townInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'CREATE'", () => {
      const textButton = /create/i;

      renderWithProviders(<Form />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });
  });
});
