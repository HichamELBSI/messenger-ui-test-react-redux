// @flow
import React from "react";
import { Provider, ThemeProvider } from "react-fela";

import getRenderer from "../libs/fela/renderer";
import { getTheme } from "../theme";

const felaInit = (story: any) => (
  <Provider renderer={getRenderer()}>
    <ThemeProvider theme={getTheme()}>{story()}</ThemeProvider>
  </Provider>
);

export default felaInit;
