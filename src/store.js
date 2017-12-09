import { applyMiddleware, createStore } from "redux";
import reducer from "./messages/reducer";
import logger from "redux-logger";

let store = createStore(reducer, applyMiddleware(logger));

export default store;
