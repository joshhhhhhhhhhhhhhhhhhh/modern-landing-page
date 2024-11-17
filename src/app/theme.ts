import { Inter } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

// Load the Inter font
const inter = Inter({
  subsets: ["latin"],
});

// Define a custom color palette
const colors = {
  brand: {
    50: "#f0e5ff",
    100: "#d7c3ff",
    200: "#bc9eff",
    300: "#a877ff",
    400: "#9c61ff",
    500: "#8b4dff", // Primary brand color
    600: "#7a3fcc",
    700: "#682e99",
    800: "#582276",
    900: "#481c59",
  }
};

// Extend the theme
export const customTheme = extendTheme({
  fonts: {
    heading: inter.style.fontFamily,
    body: inter.style.fontFamily,
    // Add monospace font if needed
    mono: "Menlo, monospace",
  },
  colors, // Include custom color palette
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  styles: {
    global: {
      // Set some global styles if needed
      body: {
        bg: "gray.50",
        color: "gray.800",
      },
    },
  },
});
