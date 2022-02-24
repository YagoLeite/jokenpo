import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";

const CurrentGame = () => {
  const { spockState, spockDispatch } = GameState();

  const selectionHandler = (option) => {
    spockDispatch({ type: "SUBMIT", value: option });
  };
  console.log(spockState);
  return (
    <Flex>
      <Button onClick={() => selectionHandler("ROCK")}>Rock</Button>
      <Button onClick={() => selectionHandler("PAPER")}>Paper</Button>
      <Button onClick={() => selectionHandler("SCISSORS")}>Scissors</Button>
      <Button onClick={() => selectionHandler("LIZARD")}>Lizard</Button>
      <Button onClick={() => selectionHandler("SPOCK")}>Spock</Button>
    </Flex>
  );
};

export default CurrentGame;
