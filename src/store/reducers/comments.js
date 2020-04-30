import { COMMENTS_TYPES } from "../action.types";

const EMPTY_COMMENT = {
  postId: 0,
  id: 0,
  name: "",
  body: "",
  email: "",
};

const defaultState = {
  commentList: [],
  fetchingCommentList: false,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case COMMENTS_TYPES.FETCH_COMMENTS_LIST_PENDING:
      return {
        ...state,
        commentList: [],
        fetchingCommentList: true,
      };
    case COMMENTS_TYPES.FETCH_COMMENTS_LIST_FULFILLED:
      return {
        ...state,
        fetchingCommentList: false,
        commentList: action.payload,
      };
    case COMMENTS_TYPES.FETCH_COMMENTS_LIST_REJECTED:
      return {
        ...state,
        fetchingCommentList: false,
      };
    default:
      return state;
  }
};
