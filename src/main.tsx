import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./components/App/App";
import "./index.css";
import GlobalStyle from "./styles/GlobalStyle/GlobalStyle";
import { Provider } from "react-redux";
import { store } from "./store";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
