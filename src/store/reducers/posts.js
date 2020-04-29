const EMPTY_POST = {
  id: 0,
  title: "",
  body: "",
};

const defaultState = {
  posts: [],
  selectedPost: EMPTY_POST,
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case "SET_SELECTED_POST":
      return {
        ...state,
        selectedPost: action.payload,
      };
    default:
      return state;
  }
};
