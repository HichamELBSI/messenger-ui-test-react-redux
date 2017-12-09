// @flow
import { createComponent } from "react-fela";
import type { ThemeT } from "../theme";

const Text = createComponent(
  ({ color, theme }: { color: string, theme: ThemeT }) => ({
    fontSize: "12px",
    color: color ? theme.color[color] : theme.color.text
  })
);

export default Text;
