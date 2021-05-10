import { Colors } from "./types";

export const baseColors = {
  failure: "#ED4B9E",
  primary: "#ffb82e",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#f1fb16",
  success: "#31D0AA",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#474D57",
  background: "#12161C",
  backgroundDisabled: "#3c3742",
  contrast: "#191326",
  dropdown: "#F6F6F6",
  invertedContrast: "#FFFFFF",
  input: "#2a2d35",
  inputSecondary: "#483f5a",
  tertiary: "#2b3139",
  tertiaryText: "#707A8A",
  text: "#D8DCE1",
  textDisabled: "#BDC2C4",
  textSubtle: "#FFFFFF",
  fillColor: "#FFFFFF",
  scrollColor: "#5e6673",
  borderColor: "#E9EAEB",
  card: "#1D1F25",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #212121 0%, #1E1F23 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#F2F2F2",
  background: "#FAFAFA",
  backgroundDisabled: "#E5E7EB",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  invertedContrast: "#191326",
  input: "#f4f5f7",
  inputSecondary: "#eeeaf4",
  primaryDark: "#0098A1",
  tertiary: "#f0f1f2",
  tertiaryText: "#dcd560",
  text: "#1E2329",
  textDisabled: "#666171",
  textSubtle: "#474d57",
  fillColor: "#474d57",
  scrollColor: "#f0f1f2",
  borderColor: "#524B63",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #F1F1F1 0%, #ECE6F3 100%)",
  },
};
