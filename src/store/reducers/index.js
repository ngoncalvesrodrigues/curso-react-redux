import { combineReducers } from "redux";

import error from "./error";
import header from "./header";
import posts from "./posts";
import comments from "./comments";
import users from "./user";

export default combineReducers({
  users,
  header,
  posts,
  comments,
  error,
});
