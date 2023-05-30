import { PreloadedState } from "@reduxjs/toolkit";
import { RootState, setupStore, store } from "../store";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";
import GlobalStyle from "../styles/GlobalStyle/GlobalStyle";
import { RouterProvider, createMemoryRouter } from "react-router-dom";

export const renderWithProviders = (
  ui: React.ReactElement,
  preloadedState?: PreloadedState<RootState>
) => {
  const testStore = preloadedState ? setupStore(preloadedState) : store;

  const Wrapper = ({ children }: PropsWithChildren): React.ReactElement => {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Provider store={testStore}>{children}</Provider>
      </ThemeProvider>
    );
  };

  render(ui, { wrapper: Wrapper });
};

export const wrapWithRouter = (ui: React.ReactElement) => {
  const routes = [
    {
      path: "/",
      element: ui,
    },
  ];

  const router = createMemoryRouter(routes);

  return <RouterProvider router={router} />;
};
