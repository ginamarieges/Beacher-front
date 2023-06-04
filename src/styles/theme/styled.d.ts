import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      goodFeedback: string;
      badFeedback: string;
    };
    fonts: {
      fontFamily: string;
    };
    fontSizes: {
      weight: string;
      smallSize: string;
      titleSize: string;
    };
  }
}
export default DefaultTheme;
