import React from "react";
import { storiesOf } from "@storybook/react";
import FelaProvider from "./initFela";

import { Title, Container, InlineMessage, Text } from "../components";

storiesOf("Title", module)
  .addDecorator(FelaProvider)
  .add("with Title", () => <Title>This is a Title</Title>);

storiesOf("Text", module)
  .addDecorator(FelaProvider)
  .add("with Text", () => <Text color="sent">Text</Text>);

storiesOf("Container", module)
  .addDecorator(FelaProvider)
  .add("default", () => (
    <Container>
      <Title>Title in a Container</Title>
    </Container>
  ));

storiesOf("InlineMessage", module)
  .addDecorator(FelaProvider)
  .add("default", () => <InlineMessage message="Heyy" />)
  .add("sent message", () => <InlineMessage message="Heyy" sent />);
