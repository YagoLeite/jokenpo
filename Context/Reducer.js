export const GameReducer = (state, action) => {
  const options = ["ROCK", "PAPER", "SCISSORS"];

  switch (action.type) {
    case "SUBMIT":
      const housePick = options[Math.floor(Math.random() * options.length)];
      const result =
        (action.value === "ROCK" && housePick === "SCISSORS") ||
        (action.value === "PAPER" && housePick === "ROCK") ||
        (action.value === "SCISSORS" && housePick === "PAPER")
          ? "YOU WIN"
          : (action.value === "ROCK" && housePick === "ROCK") ||
            (action.value === "PAPER" && housePick === "PAPER") ||
            (action.value === "SCISSORS" && housePick === "SCISSORS")
          ? "TIE"
          : "YOU LOSE";
      return {
        ...state,
        userPick: action.value,
        housePick: housePick,
        isPlaying: false,
        result: result,
        score: {
          numberOfMatches: state.score.numberOfMatches + 1,
          youWon:
            result === "YOU WIN" ? state.score.youWon + 1 : state.score.youWon,
          tie: result === "TIE" ? state.score.tie + 1 : state.score.tie,
          youLose:
            result === "YOU LOSE"
              ? state.score.youLose + 1
              : state.score.youLose,
          rate: state.score.youWon / state.score.numberOfMatches,
        },
      };
    case "NEXT-GAME":
      return { ...state, userPick: "", isPlaying: true };
    case "LOADING":
      return { ...state, score: action.value };
    default:
      return state;
  }
};

export const SpockReducer = (state, action) => {
  const options = ["ROCK", "PAPER", "SCISSORS", "LIZARD", "SPOCK"];
  switch (action.type) {
    case "SUBMIT":
      const housePick = options[Math.floor(Math.random() * options.length)];
      const result =
        (action.value === "ROCK" && housePick === "SCISSORS") ||
        (action.value === "ROCK" && housePick === "LIZARD") ||
        (action.value === "PAPER" && housePick === "ROCK") ||
        (action.value === "PAPER" && housePick === "SPOCK") ||
        (action.value === "SCISSORS" && housePick === "PAPER") ||
        (action.value === "SCISSORS" && housePick === "LIZARD") ||
        (action.value === "SPOCK" && housePick === "SCISSORS") ||
        (action.value === "SPOCK" && housePick === "ROCK") ||
        (action.value === "LIZARD" && housePick === "PAPER") ||
        (action.value === "LIZARD" && housePick === "SPOCK")
          ? "YOU WIN"
          : (action.value === "ROCK" && housePick === "ROCK") ||
            (action.value === "PAPER" && housePick === "PAPER") ||
            (action.value === "SCISSORS" && housePick === "SCISSORS") ||
            (action.value === "LIZARD" && housePick === "LIZARD") ||
            (action.value === "SPOCK" && housePick === "SPOCK")
          ? "TIE"
          : "YOU LOSE";
      return {
        ...state,
        userPick: action.value,
        housePick: housePick,
        isPlaying: false,
        result: result,
        score: {
          numberOfMatches: state.score.numberOfMatches + 1,
          youWon:
            result === "YOU WIN" ? state.score.youWon + 1 : state.score.youWon,
          tie: result === "TIE" ? state.score.tie + 1 : state.score.tie,
          youLose:
            result === "YOU LOSE"
              ? state.score.youLose + 1
              : state.score.youLose,
          rate: state.score.youWon / state.score.numberOfMatches,
        },
      };
    case "NEXT-GAME":
      return { ...state, userPick: "", isPlaying: true };
    case "LOADING":
      return { ...state, score: action.value };
    default:
      return state;
  }
};
