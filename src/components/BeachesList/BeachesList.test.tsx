import { RouterProvider, createMemoryRouter } from "react-router-dom";
import {
  getBeachMock,
  getBeachesMock,
} from "../../mocks/factories/beach/beachFactory";
import { renderWithProviders } from "../../utils/testUtils";
import BeachesList from "./BeachesList";
import { screen } from "@testing-library/react";

describe("Given a BeachList component", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Cala Pedrosa' heading", () => {
      const beaches = getBeachesMock(6);
      const pedrosaBeach = getBeachMock({ name: "Cala Pedrosa" });
      beaches.push(pedrosaBeach);

      const beachMock = {
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
});
