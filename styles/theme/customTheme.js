/** @format */

import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";
const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
// Create a theme instance.
//https://stackoverflow.com/questions/46486565/mui-customize-button-color
let theme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: amber,
    bsn: createColor("#00A1B1"),
    anger: createColor("#F40B27"),
    apple: createColor("#5DBA40"),
    steelBlue: createColor("#5C76B7"),
    violet: createColor("#BC00A3"),
    gold: createColor("#FFD700"),
  },
  typography: {
    bold: {
      fontWeight: "bold",
    },
    italic: {
      fontWeight: "italic",
    },
    h1: {
      fontSize: "14px",
      fontWeight: "400",
      background: "green",
      height: "42px",
      width: "100%",
      borderRadius: "10px",
      color: "beige",
      textAlign: "center",
      paddingTop: "7px",

      verticalAlign: "middle",
    },
    bred: {
      color: "red",
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
