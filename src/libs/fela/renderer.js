// @flow
import { createRenderer } from "fela";
import webPreset from "fela-preset-web";

const plugins = [...webPreset];

const enhancers = [require("fela-monolithic").default()];

const renderer = createRenderer({
  plugins,
  enhancers
});

// the renderStatic method is used to set the global style
renderer.renderStatic(
  { padding: "20px", margin: "0", fontFamily: "sans-serif" },
  "body"
);
renderer.renderStatic({ boxSizing: "border-box" }, "*");

export default function getRenderer() {
  return renderer;
}
