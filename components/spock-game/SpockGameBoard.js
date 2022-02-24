import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Image from "next/image";
// import triangleBg from "../styles/images/bg-triangle.svg";
import { GameState } from "../../Context/Context";
import SpockCurrentGame from "./SpockCurrentGame";
import SpockNextGame from "./SpockNextGame";

const GameBoard = () => {
  const { spockState, spockDispatch } = GameState();

  useEffect(() => {
    spockDispatch({
      type: "LOADING",
      value: JSON.parse(localStorage.getItem("spockGame")),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("spockGame", JSON.stringify(spockState.score));
  }, [spockState.score]);

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
      {spockState.isPlaying && <SpockCurrentGame />}
      {!spockState.isPlaying && <SpockNextGame />}
    </Box>
  );
};

export default GameBoard;
