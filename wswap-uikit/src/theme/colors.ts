import { Colors } from "./types";

export const baseColors = {
  failure: "#ff0000",
  primary: "#4bafaa",
  primaryBright: "#4bafaa",
  primaryDark: "#4bafaa",
  secondary: "#221f1f",
  success: "#00FF00",
  warning: "#FFFF00",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#ffffff",
  backgroundDisabled: "#E9EAEB",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#dff1f3",
  inputSecondary: "#d7caec",
  tertiary: "#EFF4F5",
  text: "#4bafaa",
  textDisabled: "#BDC2C4",
  textSubtle: "#221f1f",
  borderColor: "#E9EAEB",
  card: "#ffffff",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#9A6AFF",
  background: "#17252A",
  backgroundDisabled: "#3c3742",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#DEF2F1",
  input: "#DEF2F1",
  inputSecondary: "#66578D",
  primaryDark: "#0098A1",
  tertiary: "#DEF2F1",
  text: "#3AAFA9",
  textDisabled: "#2B7A78",
  textSubtle: "#3AAFA9",
  borderColor: "#3AAFA9",
  card: "#142529",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
