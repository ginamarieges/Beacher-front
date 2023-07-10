import { screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "../../utils/testUtils";
import Form from "./Form";
import { getBeachMock } from "../../mocks/factories/beach/beachFactory";

beforeEach(() => {
  vi.clearAllMocks();
});

describe("Given a Form component", () => {
  const actionOnClick = vi.fn();
  const labelName = /name/i;
  const labelTown = /town/i;
  const labelImage = /image/i;
  const labelRegion = /region/i;
  const textButton = /create/i;
  const textModifyButton = /modify/i;
  const labelDescription = /description/i;

  const beach = getBeachMock({
    name: "Cala Pedrosa",
    town: "Barcelona",
    description: "Nude beach",
  });

  describe("When it is rendered", () => {
    test("Then it should show the name, town and image input", () => {
      renderWithProviders(<Form onSubmit={actionOnClick} />);

      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);

      expect(nameInput).toBeInTheDocument();
      expect(townInput).toBeInTheDocument();
      expect(imageInput).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'CREATE'", () => {
      renderWithProviders(<Form onSubmit={actionOnClick} />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeInTheDocument();
    });

    test("Then the button should be disabled", () => {
      renderWithProviders(<Form onSubmit={actionOnClick} />);
      const button = screen.getByRole("button", { name: textButton });

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and the name, region and town inputs aren't empty", () => {
    test("Then the button should be enabled", async () => {
      const textName = "Gina";
      const textTown = "Sant Pol";
      const textRegion = "Maresme";
      const file = new File(["beach"], "beach.png", {
        type: "image/jpeg",
      });

      renderWithProviders(<Form onSubmit={actionOnClick} />);
      const button = screen.getByRole("button", { name: textButton });
      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);
      const regionInput = screen.getByLabelText(labelRegion);

      await userEvent.type(nameInput, textName);
      await userEvent.type(townInput, textTown);
      await userEvent.upload(imageInput, file);
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

      renderWithProviders(<Form onSubmit={actionOnClick} />);
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

  describe("When it is rendered, the name, town, image and region inputs are filled and the user click's the button", () => {
    test("Then the button should be disabled", async () => {
      const textName = "Gina";
      const textTown = "Sant Pol";
      const textRegion = "Maresme";
      const textImage = "https://ajgbdhsvcnxkl.jpg";

      renderWithProviders(<Form onSubmit={actionOnClick} />);

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

      expect(button).toBeDisabled();
    });
  });

  describe("When it is rendered and receives Cala Pedrosa beach data", () => {
    test("Then it should show Cala Pedrosa in name input and the button with the text 'MODIFY'", () => {
      renderWithProviders(<Form beach={beach} onSubmit={actionOnClick} />);

      const inputName = screen.getByLabelText(labelName);
      const inputTown = screen.getByLabelText(labelTown);
      const inputDescription = screen.getByLabelText(labelDescription);
      const button = screen.getByRole("button", { name: textModifyButton });

      expect(inputName).toHaveValue(beach.name);
      expect(inputTown).toHaveValue(beach.town);
      expect(inputDescription).toHaveValue(beach.description);
      expect(button).toBeInTheDocument();
    });
  });
});
