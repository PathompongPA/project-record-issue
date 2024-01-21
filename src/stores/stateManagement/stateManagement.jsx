export const stateManagement = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case "add":
      return { stateUser: state.stateUser++ };
    case "add-Record":
      return { ...state, Record: action.payload };
    case "clear-Record":
      return { ...state, Record: undefined };
    case "add-Products":
      return { ...state, Products: action.payload };
    case "add-value-search-form":
      return { ...state, SearchForm: action.payload };
    default:
      return state;
  }
};
