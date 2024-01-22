export const stateManagement = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "toggleShowText":
      return { count: state.count, showText: !state.showText };
    case "add":
      return { stateUser: state.stateUser++ };
    case "Record-add":
      return { ...state, Record: action.payload };
    case "Record-clear":
      return { ...state, Record: undefined };
    case "Products-add":
      return { ...state, Products: action.payload };
    case "Products-delete":
      return { ...state, Products: null };
    case "add-value-search-form":
      return { ...state, SearchForm: action.payload };
    default:
      return state;
  }
};
