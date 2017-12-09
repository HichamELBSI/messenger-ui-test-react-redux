// @flow
import { createComponent } from "react-fela";

const RawAvatar = createComponent(
  () => ({
    height: "25px",
    width: "25px",
    borderRadius: "50%",
    alignSelf: "flex-end"
  }),
  "img",
  ["src"]
);

export default RawAvatar;
