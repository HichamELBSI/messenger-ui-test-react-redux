// @flow
import { createComponent } from "react-fela";
import type { ThemeT } from "../theme";

const Input = createComponent(
  ({ theme }: { theme: ThemeT }) => ({
    height: "30px",
    width: "150px",
    borderRadius: theme.borderRadius,
    outline: "none",
    padding: theme.padding.small,
    fontSize: 12,
    border: "1px solid rgba(0,0,0,0.4)"
  }),
  "input",
  ["onChange", "value", "type"]
);

export default Input;
