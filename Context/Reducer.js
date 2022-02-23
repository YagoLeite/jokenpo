export const GameReducer = (state, action) => {
  switch (action.type) {
    case "SUBMIT":
      return { ...state, userPick: action.value };
    default:
      return state;
  }
};
