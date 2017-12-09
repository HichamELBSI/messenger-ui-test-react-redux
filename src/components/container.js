// @flow
import { createComponent } from "react-fela";

import type { ThemeT } from "../theme";

const Container = createComponent(({ theme }: { theme: ThemeT }) => ({
  width: theme.appWidth,
  margin: "auto",
  borderRadius: theme.borderRadius,
  backgroundColor: theme.color.backgroundColor,
  boxShadow: `0 2px 6px 0 ${theme.color.text}`
}));

export default Container;
