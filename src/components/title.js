// @flow
import { createComponent } from "react-fela";
import type { ThemeT } from "../theme";

const Title = createComponent(({ theme }: { theme: ThemeT }) => ({
  fontSize: "24px",
  color: theme.color.text,
  fontWeight: "bold"
}));

export default Title;
