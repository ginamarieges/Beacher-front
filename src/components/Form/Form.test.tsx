import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

    test("Then the button should be disabled", () => {
      const textButton = /create/i;

      renderWithProviders(<Form />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the name, region and town inputs aren't empty", () => {
    test("Then the butoon should be enabled", async () => {
      const textButton = /create/i;
      const labelName = /name/i;
      const labelTown = /town/i;
      const labelImage = /image/i;
      const labelRegion = /region/i;

      const textName = "Gina";
      const textTown = "Sant Pol";
      const textRegion = "Maresme";
      const textImage = "https://ajgbdhsvcnxkl.jpg";

      renderWithProviders(<Form />);
      const button = screen.getByRole("button", { name: textButton });
      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);
      const regionInput = screen.getByLabelText(labelRegion);

      await userEvent.type(nameInput, textName);
      await userEvent.type(townInput, textTown);
      await userEvent.type(imageInput, textImage);
      await userEvent.selectOptions(regionInput, textRegion);

      expect(button).not.toBeDisabled();
    });
  });

  describe("When it is rendered and the user clicks the showers, baywatch, family beach and dogs allowed checkbox", () => {
    test("Then this checkboxs should be checked and the rest shouldn't", async () => {
      const showersLabel = "Showers";
      const umbrellasLabel = "Umbrellas";
      const baywatchLabel = "Baywatch";
      const restaurantLabel = "Restaurant";
      const secretBeachLabel = "Secret beach";
      const familyBeachLabel = "Family beach";
      const dogsAllowedLabel = "Dogs allowed";

      renderWithProviders(<Form />);
      const showersCheckbox = screen.getByLabelText(showersLabel);
      const umbrellasCheckbox = screen.getByLabelText(umbrellasLabel);
      const baywatchCheckbox = screen.getByLabelText(baywatchLabel);
      const restaurantCheckbox = screen.getByLabelText(restaurantLabel);
      const familyBeachCheckbox = screen.getByLabelText(familyBeachLabel);
      const secretBeachCheckbox = screen.getByLabelText(secretBeachLabel);
      const dogsAllowedCheckbox = screen.getByLabelText(dogsAllowedLabel);

      await userEvent.click(showersCheckbox);
      await userEvent.click(baywatchCheckbox);
      await userEvent.click(familyBeachCheckbox);
      await userEvent.click(dogsAllowedCheckbox);

      expect(showersCheckbox).toBeChecked();
      expect(baywatchCheckbox).toBeChecked();
      expect(familyBeachCheckbox).toBeChecked();
      expect(dogsAllowedCheckbox).toBeChecked();

      expect(umbrellasCheckbox).not.toBeChecked();
      expect(restaurantCheckbox).not.toBeChecked();
      expect(secretBeachCheckbox).not.toBeChecked();
    });
  });
});
