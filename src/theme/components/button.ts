import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const buttonStyles = {
  components: {
    Button: {
      baseStyle: {
        borderRadius: "16px",
        boxShadow: "45px 76px 113px 7px rgba(112, 144, 176, 0.08)",
        transition: ".25s all ease",
        boxSizing: "border-box",
        _focus: {
          boxShadow: "none",
        },
        _active: {
          boxShadow: "none",
        },
      },
      variants: {
        outline: (props: StyleFunctionProps) => ({
          borderRadius: "16px",
          borderColor: mode("biru.500", "biru.400")(props),
          color: "biru.500",
          bg: 'white',
          
          _hover: {
            bg: mode("biru.600", "biru.400")(props),
            color: 'white'
          },

        }),
        its: (props: StyleFunctionProps) => ({
          bg: mode("biru.500", "biru.400")(props),
          color: "white",
          _focus: {
            bg: mode("biru.500", "biru.400")(props),
          },
          _active: {
            bg: mode("biru.500", "biru.400")(props),
          },
          _hover: {
            bg: mode("biru.600", "biru.400")(props),
          },
        }),
        itsdark: (props: StyleFunctionProps) => ({
          bg: mode("biru.700", "biru.400")(props),
          color: "white",
          _focus: {
            bg: mode("biru.700", "biru.400")(props),
          },
          _active: {
            bg: mode("biru.700", "biru.400")(props),
          },
          _hover: {
            bg: mode("biru.800", "biru.400")(props),
          },
        }),
        darkBrand: (props: StyleFunctionProps) => ({
          bg: mode("brand.900", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.900", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.800", "brand.400")(props),
          },
        }),
        lightBrand: (props: StyleFunctionProps) => ({
          bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("#F2EFFF", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        light: (props: StyleFunctionProps) => ({
          bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _active: {
            bg: mode("secondaryGray.300", "whiteAlpha.100")(props),
          },
          _hover: {
            bg: mode("secondaryGray.400", "whiteAlpha.200")(props),
          },
        }),
        action: (props: StyleFunctionProps) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("secondaryGray.300", "brand.400")(props),
          color: mode("brand.500", "white")(props),
          _focus: {
            bg: mode("secondaryGray.300", "brand.400")(props),
          },
          _active: { bg: mode("secondaryGray.300", "brand.400")(props) },
          _hover: {
            bg: mode("secondarybiru.100", "brand.400")(props),
          },
        }),
        setup: (props: StyleFunctionProps) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("secondaryGray.400", "transparent")(props),
          color: mode("secondaryGray.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("secondaryGray.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
