import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import UpdateBeachPage from "./UpdateBeachPage";
import ListPage from "../ListPage/ListPage";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { paths } from "../../routers/paths/paths";

describe("Given an UpdateBeachPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Modify beach'", () => {
      const expectedText = "Modify beach";

      renderWithProviders(wrapWithRouter(<UpdateBeachPage />));

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });

  describe("When it is rendered and receives Cala Pedrosa beach data and the user clicks the modify button", () => {
    test("Then it should show the heading 'BEACHES'", async () => {
      const headingText = /beaches/i;
      const textModifyButton = /modify/i;
      const labelName = /name/i;
      const labelTown = /town/i;
      const labelImage = /image/i;
      const labelRegion = /region/i;
      const routes = [
        {
          path: "/",
          element: <UpdateBeachPage />,
        },

        { path: paths.home, element: <ListPage /> },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />);

      const button = screen.getByRole("button", { name: textModifyButton });
      const textName = "Gina";
      const textTown = "Sant Pol";
      const textRegion = "Maresme";
      const file = new File(["beach"], "beach.png", {
        type: "image/jpeg",
      });

      const nameInput = screen.getByLabelText(labelName);
      const townInput = screen.getByLabelText(labelTown);
      const imageInput = screen.getByLabelText(labelImage);
      const regionInput = screen.getByLabelText(labelRegion);

      await userEvent.type(nameInput, textName);
      await userEvent.type(townInput, textTown);
      await userEvent.upload(imageInput, file);
      await userEvent.selectOptions(regionInput, textRegion);

      await userEvent.click(button);

      const heading = screen.getByRole("heading", {
        name: headingText,
        level: 1,
      });

      expect(heading).toBeInTheDocument();
    });
  });
});
