import { combineReducers } from "redux";
import postsReducer from "./postsReducer";
export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }
};
