// @flow
import { createComponent } from "react-fela";
import type { ThemeT } from "../theme";

const Header = createComponent(({ theme }: { theme: ThemeT }) => ({
  padding: theme.padding.standard
}));

export default Header;
