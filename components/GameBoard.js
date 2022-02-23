import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import triangleBg from "../styles/images/bg-triangle.svg";
import { GameState } from "../Context/Context";
import NextGame from "./NextGame";
import CurrentGame from "./CurrentGame";
const GameBoard = () => {
  const { state, dispatch } = GameState();

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
      {state.isPlaying && <CurrentGame />}
      {!state.isPlaying && <NextGame />}
    </Box>
  );
};

export default GameBoard;
