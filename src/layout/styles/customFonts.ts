import { CustomFonts } from "../../core/styles/customization/CustomFonts";

const FONT_FAMILY_PRIMARY = "Roboto";
const WEIGHT_100 = 100;
const WEIGHT_200 = 200;
const WEIGHT_300 = 300;
const WEIGHT_400 = 400;

export const customFonts: CustomFonts = {
  h1: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "64px",
    lineHeight: "72px",
    fontWeight: WEIGHT_400,
  },
  h1T: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: WEIGHT_300,
  },
  h1M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: WEIGHT_200,
  },
  h2: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "36px",
    lineHeight: "48px",
    fontWeight: WEIGHT_300,
  },
  h2M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "28px",
    fontWeight: WEIGHT_300,
  },
  h3: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "24px",
    lineHeight: "32px",
    fontWeight: WEIGHT_200,
  },
  h3M: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "24px",
    fontWeight: WEIGHT_200,
  },
  body: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "18px",
    lineHeight: "normal",
    fontWeight: WEIGHT_400,
  },
  bodyM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "24px",
    fontWeight: WEIGHT_100,
  },
  small: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "14px",
    lineHeight: "18px",
    fontWeight: WEIGHT_100,
  },
  smallM: {
    fontFamily: FONT_FAMILY_PRIMARY,
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: WEIGHT_100,
  },
};
