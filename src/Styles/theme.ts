import "styled-components";
import color from "color";

const theme = {
  fonts: {
    familys: {
      first: "Poppins",
      second: "Tauri",
      sans: "sans-serif",
    },
  },
  palette: {
    texts: {
      main: color("#555555"),
    },
    titles: {
      main: color("#202A25"),
    },
    pink: {
      main: color("#F21B6A"),
    },
    purple: {
      main: color("#5F4BB6"),
    },
    white: {
      main: color("#FAFCFE"),
    },
    green: {
      main: color("#25B900"),
    },
    categories: {
      frontend: color("#F21B6A"),
      backend: color("#25B900"),
      mobile: color("#5F4BB6"),
      fullstack: color("#0046FB"),
      qa: color("#FF9900"),
      devops: color("#48D1CC"),
    },
  },
};
type Theme = typeof theme;

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}

export default theme;
