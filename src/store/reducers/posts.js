import { POSTS_TYPES } from "../action.types";

const EMPTY_POST = {
  userId: 0,
  id: 0,
  title: "",
  body: "",
};

const defaultState = {
  postList: [],
  selectedPost: EMPTY_POST,
  fetchingPostList: false,
  fetchingPost: false,
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case POSTS_TYPES.FETCH_POST_LIST_PENDING:
      return {
        ...state,
        postList: [],
        selectedPost: EMPTY_POST,
        fetchingPostList: true,
      };
    case POSTS_TYPES.FETCH_POST_LIST_FULFILLED:
      return {
        ...state,
        fetchingPostList: false,
        postList: action.payload,
        selectedPost: action.payload[0],
      };
    case POSTS_TYPES.FETCH_POST_LIST_REJECTED:
      return {
        ...state,
        fetchingPostList: false,
        error: action.payload.message,
      };
    case POSTS_TYPES.FETCH_POST_PENDING:
      return {
        ...state,
        selectedPost: EMPTY_POST,
        fetchingPost: true,
      };
    case POSTS_TYPES.FETCH_POST_FULFILLED:
      return {
        ...state,
        fetchingPost: false,
        selectedPost: action.payload,
      };
    case POSTS_TYPES.FETCH_POST_REJECTED:
      return {
        ...state,
        fetchingPost: false,
        //error: action.payload.message,
        error: "Error Leyendo detalle de posts",
      };
    case POSTS_TYPES.SET_SELECTED_POST:
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};
