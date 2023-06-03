import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { loginUser } from "../../mocks/userMocks";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

describe("Given a LisPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome! Find your perfect beach for today'", () => {
      const user = loginUser;
      const expectedText = `Welcome ${user.name}! Find your perfect beach for today`;

      const routes = [
        {
          path: "/",
          element: <ListPage />,
        },
      ];

      const router = createMemoryRouter(routes);

      renderWithProviders(<RouterProvider router={router} />, {
        userStore: user,
      });

      const heading = screen.getByRole("heading", { name: expectedText });

      expect(heading).toBeInTheDocument();
    });
  });
});
