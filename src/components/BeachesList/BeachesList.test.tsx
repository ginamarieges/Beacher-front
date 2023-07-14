import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  getBeachMock,
  getBeachesMock,
} from "../../mocks/factories/beach/beachFactory";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BeachesList from "./BeachesList";
import { screen } from "@testing-library/react";
import { BeachStateStructure } from "../../store/beaches/types";
import { mockedAddBeach } from "../../mocks/beachesMocks";

describe("Given a BeachList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Cala Pedrosa' heading", () => {
      const beaches = getBeachesMock(6);
      const pedrosaBeach = getBeachMock({ name: "Cala Pedrosa" });
      beaches.push(pedrosaBeach);

      const beachMock = {
        length: 6,
        beaches: beaches,
        beach: {
          image: "",
          name: "",
          region: "",
          town: "",
          id: "",
          description: "",
          addServices: "",
          services: {
            baywatch: false,
            dogsAllowed: false,
            familyBeach: false,
            restaurant: false,
            secretBeach: false,
            showers: false,
            umbrellas: false,
          },
          user: "",
        },
      };

      const expectedHeading = "Cala Pedrosa";
      const routes = [
        {
          path: "/",
          element: <BeachesList />,
        },
      ];
      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        beachesStore: beachMock,
      });

      const heading = screen.getByRole("heading", { name: expectedHeading });

      expect(heading).toBeInTheDocument();
    });
  });
  describe("When it is rendered and the filter has the option 'Baix Empordà'", () => {
    test("Then it should show the heading 'GARRAF'", () => {
      const headingText = /garraf/i;
      const beachesStore: BeachStateStructure = {
        region: "garraf",
        beach: mockedAddBeach,
        beaches: [mockedAddBeach],
        length: 0,
      };

      renderWithProviders(wrapWithRouter(<BeachesList />), {
        beachesStore: beachesStore,
      });

      const heading = screen.getByRole("heading", { name: headingText });

      expect(heading).toBeInTheDocument();
    });
  });
});
