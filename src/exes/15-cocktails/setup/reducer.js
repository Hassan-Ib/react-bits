const reducer = (state, action) => {
  if (action.type === "LOADING") {
    console.log("loading : " + state.isLoading + action.payload.isLoading);
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
