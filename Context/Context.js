import { createContext, useContext, useReducer } from "react";
import { GameReducer } from "./Reducer";

const Game = createContext();

const GameContext = ({ children }) => {
  const [state, dispatch] = useReducer(GameReducer, {
    userPick: "",
    housePick: "",
    isPlaying: true,
    result: "",
    score: {
      numberOfMatches: 0,
      youWon: 0,
      tie: 0,
      youLose: 0,
      rate: 0,
    },
  });

  return <Game.Provider value={{ state, dispatch }}>{children}</Game.Provider>;
};

export const GameState = () => {
  return useContext(Game);
};

export default GameContext;
