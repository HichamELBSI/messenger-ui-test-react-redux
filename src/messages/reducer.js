// @flow
import { assocPath, assoc, append } from "ramda";
import StaticMessageList, { type MessageT } from "./staticListData";
import { type ActionsT } from "./actions";

export type State = {
  messages: $ReadOnlyArray<MessageT>,
  user: { admin: boolean }
};

const initialState = { messages: StaticMessageList, user: { admin: false } };

const reducer = (state: State = initialState, action: ActionsT): State => {
  switch (action.type) {
    case "SEND_MESSAGE": {
      return assoc(
        "messages",
        append(
          {
            ...action.payload,
            uniqueID: state.messages.length + 1
          },
          state.messages
        ),
        state
      );
    }
    case "TOGGLE_ADMIN": {
      return assocPath(["user", "admin"], !state.user.admin, state);
    }
    case "CLEAR_LIST": {
      return {
        messages: [],
        user: initialState.user
      };
    }
    default: {
      return initialState;
    }
  }
};

export default reducer;
