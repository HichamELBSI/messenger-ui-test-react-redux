// @flow

type ColorsT = {|
  backgroundColor: string,
  text: string,
  sent: string,
  white: string,
  response: string
|};

export type Sizes = { small: "10px", standard: "20px", large: "30px" };

export type ThemeT = {
  borderRadius: string,
  color: ColorsT,
  appWidth: string,
  padding: Sizes
};

const basicColors: ColorsT = {
  backgroundColor: "#F7F7F7",
  text: "#333333",
  sent: "#1784FB",
  white: "white",
  response: "#F0F0F0"
};

export const theme: ThemeT = {
  borderRadius: "20px",
  color: basicColors,
  appWidth: "360px",
  padding: { small: "10px", standard: "20px", large: "30px" }
};

export const getTheme = (): ThemeT => ({
  ...theme
});
