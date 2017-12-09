// @flow
import React from "react";
import { createComponent } from "react-fela";
import { connect } from "react-redux";

import {
  Title,
  InlineMessage,
  MessagesList,
  Header,
  Input
} from "../components";
import User from "./userCheckBox";
import type { MessageT } from "./staticListData";
import { sendMessage, clearList } from "./actions";
import type { State } from "./reducer";

const FormContainer = createComponent(() => ({
  width: "100%",
  height: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "16px",
  padding: "10px"
}));

const mapStateToProps = (state: State) => ({
  messages: state.messages,
  user: state.user
});

const mapDispatchToProps = {
  sendMessage,
  clearList
};

type Props = {
  messages: Array<Object>,
  user: Object,
  sendMessage: typeof sendMessage,
  clearList: typeof clearList
};
type MessagesStateT = {
  message: string,
  privateMessage: boolean
};

class Messages extends React.Component<Props, MessagesStateT> {
  state = {
    message: "",
    privateMessage: false
  };

  // Scroll to the bottom of the message div when there is a difference between the previous list and the next
  componentWillUpdate(prevProps) {
    if (prevProps.messages.length !== this.props.messages.length)
      var interval = setInterval(() => {
        // $FlowFixMe
        let elem = this.messages;
        elem.scrollTop = elem.scrollHeight;
        // Here clear the interval when scroll is done to avoid unwanted scroll
        clearInterval(interval);
      }, 200);
  }

  // Send message to the store
  sendMessage = () => {
    this.props.sendMessage(this.state.message, this.state.privateMessage, true);
    // Simulate a response with another call of sendMessage
    var interval = setInterval(() => {
      this.props.sendMessage("Merci pour votre message", false, false);
      clearInterval(interval);
    }, 200);
    // Empty the input by setting the component state
    this.setState(() => ({ message: "" }));
    // Then focus the input to
    // $FlowFixMe
    this.input.focus();
  };

  render() {
    const { messages, user, clearList } = this.props;
    return (
      <div>
        <Header>
          <Title>Messenger</Title>
          <User />
        </Header>
        <MessagesList
          innerRef={ref => {
            // $FlowFixMe
            this.messages = ref;
          }}
        >
          {/* here, map into the messages list that come from the store to display all messages */}
          {messages.map((message: MessageT) => (
            <InlineMessage
              key={message.uniqueID}
              message={message.message}
              sent={message.sent}
              privateMessage={message.private}
              hasRights={user.admin}
            />
          ))}
        </MessagesList>
        <FormContainer>
          <Input
            innerRef={ref => {
              // $FlowFixMe
              this.input = ref;
            }}
            type="text"
            value={this.state.message}
            onChange={e =>
              this.setState({
                message: e.target.value
              })
            }
          />
          <label>
            Privé
            <input
              name="private"
              type="checkbox"
              checked={this.state.privateMessage}
              onChange={() =>
                this.setState(state => ({
                  privateMessage: !state.privateMessage
                }))
              }
            />
          </label>
          <button
            disabled={!Boolean(this.state.message)}
            onClick={this.sendMessage}
          >
            envoyer
          </button>
          <button disabled={!Boolean(messages)} onClick={clearList}>
            Vider
          </button>
        </FormContainer>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
