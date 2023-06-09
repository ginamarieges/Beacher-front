import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import AddBeachPage from "./AddBeachPage";
import { store } from "../../store";

describe("Given a AddBeachPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show the heading 'ADD BEACH'", () => {
      const headingText = /add beach/i;

      renderWithProviders(wrapWithRouter(<AddBeachPage />));

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user add a new beach", () => {
    test("Then it should show the heading 'BEACHES'", async () => {
      const textButton = /create/i;
      const labelName = /name/i;
      const labelTown = /town/i;
      const labelImage = /image/i;
      const labelRegion = /region/i;

      const textName = "Gina";
      const textTown = "Sant Pol";
      const textRegion = "Maresme";
      const textImage = "https://ajgbdhsvcnxkl.jpg";

      renderWithProviders(wrapWithRouter(<AddBeachPage />));

      const button = screen.getByRole("button", { name: textButton });
      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);
      const regionInput = screen.getByLabelText(labelRegion);

      await userEvent.type(nameInput, textName);
      await userEvent.type(townInput, textTown);
      await userEvent.type(imageInput, textImage);
      await userEvent.selectOptions(regionInput, textRegion);
      await userEvent.click(button);

      const message = store.getState().uiStore.modal.message;
      const expectedMessage = "Your beach is added!";
      expect(message).toBe(expectedMessage);
    });
  });
});
