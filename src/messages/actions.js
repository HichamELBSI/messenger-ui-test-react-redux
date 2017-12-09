// @flow
import moment from "moment";

const SEND_MESSAGE = "SEND_MESSAGE";
type SendMessageT = {
  type: "SEND_MESSAGE",
  payload: { message: string, private: string, sent: boolean }
};
const sendMessage = (
  message: string,
  privateMessage: boolean,
  sent: boolean
) => ({
  type: SEND_MESSAGE,
  payload: {
    message: message,
    private: privateMessage,
    sent: sent,
    date: moment()
  }
});

const TOGGLE_ADMIN = "TOGGLE_ADMIN";
type ToggleAdminT = { type: "TOGGLE_ADMIN" };
const toggleAdmin = () => ({
  type: TOGGLE_ADMIN
});

const CLEAR_LIST = "CLEAR_LIST";
type ClearListT = { type: "CLEAR_LIST" };
const clearList = () => ({
  type: CLEAR_LIST
});

export { sendMessage, toggleAdmin, clearList };
export type ActionsT = SendMessageT | ToggleAdminT | ClearListT;
