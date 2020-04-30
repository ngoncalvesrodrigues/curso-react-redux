import * as api from "../../api";
import { COMMENTS_TYPES } from "../action.types";

export const fetchCommentList = (postId) => ({
  type: COMMENTS_TYPES.FETCH_COMMENTS_LIST,
  payload: api.getComments(postId),
});
