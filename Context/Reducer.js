export const GameReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        userPick: action.value,
        isPlaying: false,
        test: +state.test + 1,
      };
    case "NEXT-GAME":
      return { ...state, userPick: "", isPlaying: true };
    case "LOADING":
      return { ...state, test: action.value };
    default:
      return state;
  }
};
