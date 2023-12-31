import React from "react";
import "@fontsource/montserrat";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store";
import theme from "./styles/theme/theme.js";
import { RouterProvider } from "react-router-dom";
import appRouter from "./routers/appRouter.js";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <RouterProvider router={appRouter} />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
