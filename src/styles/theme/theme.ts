import DefaultTheme from "./styled";
import "@fontsource/montserrat";

const theme: DefaultTheme = {
  color: {
    primary: "#564137",
    secondary: "#efece5",
    gradient:
      "linear-gradient(0deg, rgba(105,78,67,0) 0%, rgba(204,187,165,1) 80%)",
    badFeedback: "#963a2e",
    goodFeedback: "#a5cca9",
  },

  fonts: {
    fontFamily: "Montserrat, sans-serif",
  },

  fontSizes: {
    weight: "400",
    smallSize: "1rem",
    titleSize: "1.25rem",
  },
};

export default theme;
