import { extendTheme } from "@chakra-ui/react";
import "../fonts.css";

const customTheme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  fonts: {
    heading: "'Butler', serif",
    body: "'Poppins', sans-serif",
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
        newsreader: {
          fontFamily: "'Newsreader', serif",
        },
      },
    },
    Select: {
      variants: {
        outline: {
          field: {
            borderRadius: 0,
          },
        },
      },
      defaultProps: {
        variant: "outline",
      },
    },
    Input: {
      variants: {
        outline: (props: any) => ({
          field: {
            backgroundColor: "#F9F7F3",
            borderColor: "black",
            _focus: {
              borderColor: "black",
              boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              _dark: {
                boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              },
            },
            _hover: {
              borderColor: "black",
              boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              _dark: {
                boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              },
            },
          },
        }),
      },
      baseStyle: {
        field: {
          fontFamily: "'Newsreader', serif",
          fontSize: "16px",
          color: "black",
          backgroundColor: "#F9F7F3",
          borderRadius: 0,
          _placeholder: {
            color: "gray.900",
            fontFamily: "'Newsreader', serif",
            fontSize: "14px",
          },
        },
      },
    },
    Toast: {
      baseStyle: {
        fontFamily: "'Butler', serif",
      },
    },
  },
});

export default customTheme;
