export const GameReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, userPick: action.value, isPlaying: false };
    case "NEXT-GAME":
      return { ...state, userPick: "", isPlaying: true };
    default:
      return state;
  }
};
