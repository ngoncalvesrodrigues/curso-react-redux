import { ERROR_TYPES } from "../action.types";

const defaultState = {
  errores: [],
  type: "ERROR o WARNING o INFO",
};

export default (state = defaultState, { type, payload }) => {
  const addError = (newError) => ({
    ...state,
    errores: [...state.errores, newError],
  });

  if (type.includes("_REJECTED")) {
    return addError(payload.xmessage || "Error en llamada al Api");
  }
  switch (type) {
    case ERROR_TYPES.ADD_ERROR:
      return addError(payload);
    case ERROR_TYPES.REMOVE_ERROR:
      return {
        ...state,
        errores: state.errores.filter((error, index) => index !== payload),
      };
    default:
      return state;
  }
};
