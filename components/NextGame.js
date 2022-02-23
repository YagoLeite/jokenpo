import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GameState } from "../Context/Context";
const NextGame = () => {
  const { state, dispatch } = GameState();
  const result =
    (state.userPick === "ROCK" && state.housePick === "SCISSORS") ||
    (state.userPick === "PAPER" && state.housePick === "ROCK") ||
    (state.userPick === "SCISSORS" && state.housePick === "PAPER")
      ? "YOU WIN"
      : (state.userPick === "ROCK" && state.housePick === "ROCK") ||
        (state.userPick === "PAPER" && state.housePick === "PAPER") ||
        (state.userPick === "SCISSORS" && state.housePick === "SCISSORS")
      ? "TIE"
      : "YOU LOOSE";

  return (
    <Flex>
      <Box>
        <Text>You Picked</Text>
        <Button>{state.userPick}</Button>
      </Box>
      <Box>
        <Text>{result}</Text>
        <Button onClick={() => dispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      <Box>
        <Text>The House Picked</Text>
        <Button>{state.housePick}</Button>
      </Box>
    </Flex>
  );
};

export default NextGame;
