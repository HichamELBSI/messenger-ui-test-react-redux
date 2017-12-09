// @flow
import React from "react";
import ReactDOM from "react-dom";
import Root from "./root";
import registerServiceWorker from "./registerServiceWorker";
import store from "./store";
import { Provider } from "react-redux";

import FelaProvider from "./libs/fela";

const EnhancedApp = () => (
  <Provider store={store}>
    <FelaProvider>
      <Root />
    </FelaProvider>
  </Provider>
);

// $FlowFixMe
ReactDOM.render(<EnhancedApp />, document.getElementById("root"));
registerServiceWorker();
