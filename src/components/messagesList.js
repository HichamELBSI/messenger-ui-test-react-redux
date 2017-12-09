// @flow
import { createComponent } from "react-fela";
import type { ThemeT } from "../theme";

const MessagesList = createComponent(({ theme }: { theme: ThemeT }) => ({
  backgroundColor: theme.color.white,
  padding: theme.padding.small,
  height: "460px",
  overflowY: "auto"
}));

export default MessagesList;
