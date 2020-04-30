import { HEADER_TYPES } from "../action.types";
import { DEFAULT_TITLE } from "../../components/Header/Header.constants";

const defaultState = {
  title: DEFAULT_TITLE,
  back: {
    color: "",
    icono: "",
  },
};

export default (state = defaultState, { type, payload }) => {
  switch (type) {
    case HEADER_TYPES.SET_TITLE:
      return {
        ...state,
        title: payload.title,
      };
    case HEADER_TYPES.SET_COLOR:
      return {
        ...state,
        back: {
          ...state.back,
          color: payload,
        },
      };
    default:
      return state;
  }
};
