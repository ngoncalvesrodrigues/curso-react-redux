const defaultState = {
  userName: "",
  role: "",
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        userName: action.payload.userName,
        role: action.payload.role,
      };
    default:
      return state;
  }
};
