import * as api from "../../api";
import { POSTS_TYPES } from "../action.types";

export const fetchPostList = () => ({
  type: POSTS_TYPES.FETCH_POST_LIST,
  payload: api.getPosts(),
});

export const fetchPost = (id) => ({
  type: POSTS_TYPES.FETCH_POST,
  payload: api.getPost(id),
});

export const setSelectedPost = (post) => ({
  type: POSTS_TYPES.SET_SELECTED_POST,
  payload: post,
});
