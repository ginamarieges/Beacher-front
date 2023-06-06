import { screen } from "@testing-library/react";
import { renderWithProviders } from "../../utils/testUtils";
import ListPage from "./ListPage";
import { loginUser } from "../../mocks/userMocks";

describe("Given a LisPage page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a heading with the text 'Welcome! Find your perfect beach for today'", () => {
      const user = loginUser;
      const expectedText = `Welcome ${user.name}! Find your perfect beach for today`;

      renderWithProviders(<ListPage />, {
        userStore: user,
      });

      const title = screen.getByText(expectedText);

      expect(title).toBeInTheDocument();
    });
  });
});
