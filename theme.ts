import { extendTheme } from "@chakra-ui/react";

const theme = {
  fonts: {
    heading: "'Roboto', helvetica, arial, sans-serif",
    body: "'Roboto', helvetica, arial, sans-serif",
    text: "'Roboto', helvetica, arial, sans-serif",
    mono: "monospace",
  },
  colors: {
    transparent: "transparent",
    current: "currentColor",
    black: "#000000",
    white: "#FFFFFF",
    primary: {
      // https://smart-swatch.netlify.app/#A557DE
      50: "#f7e8ff",
      100: "#debef5",
      200: "#c694eb",
      300: "#af6ae2",
      400: "#9840d8",
      500: "#7f27bf",
      600: "#631d95",
      700: "#46146c",
      800: "#2b0c42",
      900: "#11021a",
    },
    secondary: {
      50: "#ffe4ff",
      100: "#fdb6ef",
      200: "#f987e0",
      300: "#f457d3",
      400: "#f029c5",
      500: "#d60fab",
      600: "#a80885",
      700: "#780360",
      800: "#49003b",
      900: "#1d0017",
    },
    neutral: {
      50: "#e3f6fc",
      100: "#cddbe4",
      200: "#b1c1cc",
      300: "#95a8b6",
      400: "#7990a0",
      500: "#5f7686",
      600: "#495c6a",
      700: "#32424d",
      800: "#1c2831",
      900: "#010e18",
    },
  },
  semanticTokens: {
    colors: {
      "chakra-body-bg": {
        _dark: "neutral.800",
        _light: "white",
      },
      "chakra-body-text": {
        _dark: "whiteAlpha.900",
        _light: "neutral.800",
      },
      "chakra-border-color": {
        _dark: "whiteAlpha.300",
        _light: "neutral.200",
      },
      "chakra-placeholder-color": {
        _dark: "whiteAlpha.400",
        _light: "neutral.500",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        fontWeight: "normal",
        color: "neutral.600",
      },
      sizes: {
        "2xl": {
          fontWeight: "bold",
        },
      },
    },
    Text: {
      baseStyle: {
        fontFamily: "body",
        fontSize: "lg",
      },
      variants: {
        secondaryText: () => ({
          color: "neutral.400",
        }),
      },
    },
    Link: {
      baseStyle: {
        transition: "color 0.25s ease",
        color: `primary.300`,
        _hover: {
          color: `secondary.300`,
          textDecoration: "none",
        },
      },
      variants: {
        inheritColor: {
          color: "inherit",
          _hover: {
            color: `neutral.400`,
          },
        },
        inheritColorKeepHover: {
          color: "inherit",
        },
      },
    },
  },
};

const chakraUITheme = extendTheme(theme);

console.log(chakraUITheme);

export default chakraUITheme;
