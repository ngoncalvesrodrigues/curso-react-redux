import { combineReducers } from "redux";

import users from "./user";
import posts from "./posts";

export default combineReducers({
  posts,
  users,
});
