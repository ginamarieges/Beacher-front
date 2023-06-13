import { screen } from "@testing-library/react";
import useEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import DetailsPage from "./DetailsPage";

describe("Given a DetailsPage page", () => {
  const deleteText = /delete/i;
  const modifyText = /modify/i;
  const beachStore = {
    beaches: [],
    length: 0,
    beach: {
      user: "646f981a0056a93b408c5050",
      name: "Aiguafreda",
      image: "image",
      region: "Baix Empordà",
      town: "Begur",
      id: "64874d6ffa8ea2d9c2998c41",
      description: "Great beach",
      addServices: "Berta's Beach",
      services: {
        baywatch: true,
        dogsAllowed: true,
        familyBeach: true,
        restaurant: true,
        secretBeach: true,
        showers: true,
        umbrellas: true,
      },
    },
  };
  const userStore = {
    id: "646f981a0056a93b408c5050",
    name: "Gina",
    token: "yuigaefhncpiaeuws90uwef9sd",
    isLogged: true,
  };
  describe("When it is rendered and receives Aiguafreda beach", () => {
    test("Then it should show the buttons delete and modify", () => {
      renderWithProviders(wrapWithRouter(<DetailsPage />), {
        beachesStore: beachStore,
        userStore,
      });

      const deleteButton = screen.getByRole("button", { name: deleteText });
      const modifyButton = screen.getByRole("button", { name: modifyText });

      expect(deleteButton).toBeInTheDocument();
      expect(modifyButton).toBeInTheDocument();
    });

    test("Then it should show the shower, umbrellas, restaurant, secret beach, family beach, dogs allowed and baywatch icons", () => {
      renderWithProviders(wrapWithRouter(<DetailsPage />), {
        beachesStore: beachStore,
        userStore,
      });
      const showerAlternativeText = /shower icon/i;
      const restaurantAlternativeText = /cutlery/i;
      const baywatchAlternativeText = /baywatch/i;
      const dogsAlternativeText = /paw icon/i;
      const familyBeachAlternativeText = /family icon/i;
      const secretAlternativeText = /spy icon/i;
      const umbrellasAlternativeText = /parasol icon/i;

      const showerIcon = screen.getByAltText(showerAlternativeText);
      const restaurantIcon = screen.getByAltText(restaurantAlternativeText);
      const baywatchIcon = screen.getByAltText(baywatchAlternativeText);
      const dogsIcon = screen.getByAltText(dogsAlternativeText);
      const familyIcon = screen.getByAltText(familyBeachAlternativeText);
      const spyIcon = screen.getByAltText(secretAlternativeText);
      const umbrellaIcon = screen.getByAltText(umbrellasAlternativeText);

      expect(showerIcon).toBeInTheDocument();
      expect(restaurantIcon).toBeInTheDocument();
      expect(baywatchIcon).toBeInTheDocument();
      expect(dogsIcon).toBeInTheDocument();
      expect(spyIcon).toBeInTheDocument();
      expect(familyIcon).toBeInTheDocument();
      expect(umbrellaIcon).toBeInTheDocument();
    });

    test("Then it should show 'Berta's beach test", () => {
      renderWithProviders(wrapWithRouter(<DetailsPage />), {
        beachesStore: beachStore,
        userStore,
      });

      const expectedText = /Berta's Beach/i;

      const text = screen.getByText(expectedText);

      expect(text).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user clicks the delete button", () => {
    test("Then it should show the message beach deleted", async () => {
      renderWithProviders(wrapWithRouter(<DetailsPage />), {
        beachesStore: beachStore,
        userStore,
      });

      const deleteButton = screen.getByRole("button", { name: deleteText });

      await useEvent.click(deleteButton);

      expect(deleteButton).not.toBeInTheDocument();
    });
  });
});
