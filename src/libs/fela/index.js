// @flow
import * as React from "react";
import { Provider, ThemeProvider } from "react-fela";

import { getTheme } from "../../theme";
import getRenderer from "./renderer";

type Props = {|
  children: React.Node
|};

const FelaProvider = ({ children }: Props) => (
  <Provider renderer={getRenderer()}>
    {/* Pass the theme to the provider should pass the theme to all fela component */}
    <ThemeProvider theme={getTheme()}>{children}</ThemeProvider>
  </Provider>
);

export default FelaProvider;
