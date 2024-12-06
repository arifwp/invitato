import { extendTheme } from "@chakra-ui/react";
import "../fonts.css";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Butler', serif", // Butler for headings
    body: "'Poppins', sans-serif", // Poppins for body text
  },
  fontWeights: {
    normal: 400,
    bold: 700,
  },
  components: {
    Text: {
      variants: {
        butler: {
          fontFamily: "'Butler', serif",
        },
        poppins: {
          fontFamily: "'Poppins', sans-serif",
        },
      },
    },
  },
});

export default customTheme;
