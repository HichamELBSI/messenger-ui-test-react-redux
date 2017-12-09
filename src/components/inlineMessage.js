// @flow

import * as React from "react";
import { createComponent } from "react-fela";

import type { ThemeT } from "../theme";
import { canAccessMessage } from "../libs/helpers";
import RawAvatar from "./avatar";
import Text from "./text";
import female from "../static/img/female.jpg";
import male from "../static/img/male.png";

const InlineMessageContainer = createComponent(
  ({ theme, sent }: { theme: ThemeT, sent: boolean }) => ({
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    ">*:nth-child(1)": {
      order: 2
    },
    ">*:nth-child(2)": {
      order: 1
    },
    extend: {
      condition: sent,
      style: {
        justifyContent: "flex-end",
        ">*:nth-child(1)": {
          order: 1
        },
        ">*:nth-child(2)": {
          order: 2
        }
      }
    }
  })
);

const Message = createComponent(
  ({ theme, sent }: { theme: ThemeT, sent: boolean }) => ({
    borderRadius: theme.padding.standard,
    padding: theme.padding.small,
    backgroundColor: theme.color.response,
    margin: "10px 10px 0 10px",
    maxWidth: "180px",
    extend: {
      condition: sent,
      style: {
        backgroundColor: theme.color.sent
      }
    }
  })
);

const InlineMessage = ({
  sent,
  message,
  privateMessage,
  hasRights
}: {
  sent?: boolean,
  message: string,
  privateMessage?: boolean,
  hasRights: boolean
}) => (
  <InlineMessageContainer sent={sent}>
    <Message sent={sent}>
      <Text color={sent ? "white" : "text"}>
        {privateMessage ? canAccessMessage(hasRights, message) : message}
      </Text>
    </Message>
    <RawAvatar src={sent ? female : male} />
  </InlineMessageContainer>
);

export default InlineMessage;
