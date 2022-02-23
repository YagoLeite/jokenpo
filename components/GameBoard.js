import { Box, Button } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import triangleBg from "../styles/images/bg-triangle.svg";
import { GameState } from "../Context/Context";
const GameBoard = () => {
  const { dispatch } = GameState();
  const selectionHandler = (option) => {
    dispatch({ type: "SUBMIT", value: option });
  };
  return (
    <Box
      w="500px"
      h="500px"
      bg="white"
      alignSelf="center"
      position="relative"
      mt="20px"
      left="25%"
    >
      <Button onClick={() => selectionHandler("ROCK")}>Rock</Button>
      <Button onClick={() => selectionHandler("PAPER")}>Paper</Button>
      <Button onClick={() => selectionHandler("SCISSORS")}>Scissors</Button>
    </Box>
  );
};

export default GameBoard;
