import { screen } from "@testing-library/react";
import { renderWithProviders, wrapWithRouter } from "../../utils/testUtils";
import App from "./App";

describe("Given an App component", () => {
  describe("When it is rendered and the user is not logged in", () => {
    test("Then in should show the beacher logo", () => {
      const logoAlternativeText = /beacher logo/i;
      const userStore = {
        id: "",
        name: "",
        token: "",
        isLogged: false,
      };

      renderWithProviders(wrapWithRouter(<App />), { userStore });

      const logo = screen.getByAltText(logoAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });

  describe("When it is rendered and the user is logged in", () => {
    test("Then in should show the beacher logo", () => {
      const logoAlternativeText = /beacher logo/i;

      const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NDZmOTgxYTAwNTZhOTNiNDA4YzUwNTAiLCJuYW1lIjoiYWRtaW4iLCJpYXQiOjE2ODY2NzYxNzQsImV4cCI6MTY5MzU4ODE3NH0.KZ_XEiaIcOi4-Qah2AH4waLDZ9C-GHBkcudcCB5dY9A";

      localStorage.setItem("token", token);

      renderWithProviders(wrapWithRouter(<App />));

      const logo = screen.getByAltText(logoAlternativeText);

      expect(logo).toBeInTheDocument();
    });
  });
});
