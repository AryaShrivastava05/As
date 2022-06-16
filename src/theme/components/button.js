import { mode } from "@chakra-ui/theme-tools";
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
        outline: () => ({
          borderRadius: "16px",
        }),
        brand: (props) => ({
          bg: mode("brand.500", "brand.400")(props),
          color: "white",
          _focus: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _active: {
            bg: mode("brand.500", "brand.400")(props),
          },
          _hover: {
            bg: mode("brand.600", "brand.400")(props),
          },
        }),
        darkBrand: (props) => ({
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
        lightBrand: (props) => ({
          bg: mode("#cfcae3", "#FFFDD0.100")(props),
          color: mode("brand.500", "#FFFDD0")(props),
          _focus: {
            bg: mode("#cfcae3", "#FFFDD0.100")(props),
          },
          _active: {
            bg: mode("808080.300", "#FFFDD0.100")(props),
          },
          _hover: {
            bg: mode("808080.400", "#FFFDD0.200")(props),
          },
        }),
        light: (props) => ({
          bg: mode("808080.300", "#FFFDD0.100")(props),
          color: mode("808080.900", "white")(props),
          _focus: {
            bg: mode("808080.300", "#FFFDD0.100")(props),
          },
          _active: {
            bg: mode("808080.300", "#FFFDD0.100")(props),
          },
          _hover: {
            bg: mode("#808080.400", "#FFFDD0.200")(props),
          },
        }),
        action: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("808080.300", "brand.400")(props),
          color: mode("brand.500", "#FFFDD0")(props),
          _focus: {
            bg: mode("808080.300", "brand.400")(props),
          },
          _active: { bg: mode("808080.300", "brand.400")(props) },
          _hover: {
            bg: mode("secon808080daryGray.200", "brand.400")(props),
          },
        }),
        setup: (props) => ({
          fontWeight: "500",
          borderRadius: "50px",
          bg: mode("transparent", "brand.400")(props),
          border: mode("1px solid", "0px solid")(props),
          borderColor: mode("808080.400", "transparent")(props),
          color: mode("808080.900", "white")(props),
          _focus: {
            bg: mode("transparent", "brand.400")(props),
          },
          _active: { bg: mode("transparent", "brand.400")(props) },
          _hover: {
            bg: mode("808080.100", "brand.400")(props),
          },
        }),
      },
    },
  },
};
