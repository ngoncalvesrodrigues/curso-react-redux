import { HEADER_TYPES } from "../action.types";

export const setTitle = (title) => ({
  type: HEADER_TYPES.SET_TITLE,
  payload: { title }, // IGUAL A { title: title }
});
