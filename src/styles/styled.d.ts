import { DefaultTheme } from "styled-components";

declare module "styled-components" {
  interface DefaultTheme {
    color: {
      primary: string;
      secondary: string;
      gradient: string;
      goodFeedback: string;
      badFeedback: string;
    };
    fonts: {
      fontFamily: string;
    };
    fontSizes: {
      weight: string;
    };
  }
}
export default DefaultTheme;
