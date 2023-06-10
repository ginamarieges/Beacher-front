import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getBeachMock } from "../../mocks/factories/beach/beachFactory";
import { BeachStructure } from "../../store/beaches/types";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import BeachCard from "./BeachCard";
import { store } from "../../store";

describe("Given a BeachCard component", () => {
  const mockBeach: BeachStructure = getBeachMock({
    name: "Sitges",
    user: "67t8ghwne0f8cwhgn",
  });
  const userId = "67t8ghwne0f8cwhgn";
  describe("When it receives the Sitges beach data", () => {
    test("Then it should show a heading with Sitges", () => {
      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="lazy" beach={mockBeach} />
        )
      );

      const heading = screen.getByRole("heading", { name: mockBeach.name });

      expect(heading).toBeInTheDocument();
    });

    test("Then it should show a Sitges picture", () => {
      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="eager" beach={mockBeach} />
        )
      );
      const image = screen.getByRole("img", {
        name: mockBeach.name,
      });

      expect(image).toBeInTheDocument();
    });
  });

  describe("When it receives Sitges beach data and the userId it's the same than the beach user", () => {
    test("Then it should show the Sitges card with a close button", () => {
      const alternativeText = /close-button/i;

      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="eager" beach={mockBeach} />
        )
      );
      const button = screen.getByRole("button", { name: alternativeText });

      expect(button).toBeInTheDocument();
    });
  });

  describe("When it receives Sitges beach data and the user clicks the delete button", () => {
    test("Then it should show the feedback message 'Your beach has been deleted'", async () => {
      const alternativeText = /close-button/i;
      const expectedMessage = "Your beach has been deleted!";

      renderWithProviders(
        wrapWithRouter(
          <BeachCard userId={userId} isLazy="eager" beach={mockBeach} />
        )
      );
      const button = screen.getByRole("button", { name: alternativeText });

      await userEvent.click(button);
      const message = store.getState().uiStore.modal.message;

      expect(message).toBe(expectedMessage);
    });
  });
});
