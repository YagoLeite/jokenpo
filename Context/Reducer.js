export const GameReducer = (state, action) => {
  const options = ["ROCK", "PAPER", "SCISSORS"];
  switch (action.type) {
    case "SUBMIT":
      return {
        ...state,
        userPick: action.value,
        housePick: options[Math.floor(Math.random() * options.length)],
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
