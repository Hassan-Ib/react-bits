const reducer = (state, action) => {
  if (action.type === "LOADING") {
    const { isLoading } = action.payload;
    const newState = {
      ...state,
      isLoading,
    };
    return newState;
  }
  if (action.type === "COCKTAILS") {
    const { cocktails } = action.payload;
    const newState = {
      ...state,
      cocktails,
    };
    return newState;
  }
  if (action.type === "SEARCHTERM") {
    const { searchTerms } = action.payload;
    const newState = {
      ...state,
      searchTerms,
    };
    return newState;
  }
  return "dispatch not found";
};
export default reducer;
