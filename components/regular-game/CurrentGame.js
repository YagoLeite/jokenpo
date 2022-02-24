import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";

const CurrentGame = () => {
  const { state, dispatch } = GameState();

  const selectionHandler = (option) => {
    dispatch({ type: "SUBMIT", value: option });
  };
  return (
    <Flex>
      <Button onClick={() => selectionHandler("ROCK")}>Rock</Button>
      <Button onClick={() => selectionHandler("PAPER")}>Paper</Button>
      <Button onClick={() => selectionHandler("SCISSORS")}>Scissors</Button>
    </Flex>
  );
};

export default CurrentGame;
