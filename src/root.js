// @flow
import * as React from "react";

import { Container } from "./components";
import Messages from "./messages";

class Root extends React.Component<{}> {
  render() {
    return (
      <Container>
        <Messages />
      </Container>
    );
  }
}

export default Root;
