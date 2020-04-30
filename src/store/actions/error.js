import { ERROR_TYPES } from "../action.types";

export const addError = (texto) => ({
  type: ERROR_TYPES.ADD_ERROR,
  payload: texto,
});

export const removeError = (index) => ({
  type: ERROR_TYPES.REMOVE_ERROR,
  payload: index,
});
