import messagesReducer from "../reducer";
import StaticMessageList from "../staticListData";
import moment from "moment";

describe("messageReducer", () => {
  it("should send a message and set the uniqueID", () => {
    const state = messagesReducer(
      { messages: StaticMessageList, user: { admin: false } },
      {
        type: "SEND_MESSAGE",
        payload: {
          message: "Hi :",
          sent: true,
          private: false,
          date: moment()
        }
      }
    );
    expect(state.messages.length).toEqual(StaticMessageList.length + 1);
    expect(state.messages[state.messages.length - 1].uniqueID).toBe(
      state.messages.length
    );
  });

  it("should clear the message list", () => {
    const state = messagesReducer(
      { messages: StaticMessageList, user: { admin: false } },
      { type: "CLEAR_LIST" }
    );
    expect(state.messages.length).toBe(0);
    expect(state.user.admin).toBe(false);
  });

  it("should change to an admin user", () => {
    const state = messagesReducer(
      { messages: StaticMessageList, user: { admin: false } },
      { type: "TOGGLE_ADMIN" }
    );
    expect(state.user.admin).toBe(true);
  });

  it("should change to a simple user", () => {
    const state = messagesReducer(
      { messages: StaticMessageList, user: { admin: true } },
      { type: "TOGGLE_ADMIN" }
    );
    expect(state.user.admin).toBe(false);
  });
});
