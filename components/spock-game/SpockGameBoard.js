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
    if (localStorage.getItem("spockGame"))
      spockDispatch({
        type: "LOADING",
        value: JSON.parse(localStorage.getItem("spockGame")),
      });
  }, []);

  useEffect(() => {
    localStorage.setItem("spockGame", JSON.stringify(spockState.score));
  }, [spockState.score]);

  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      {spockState.isPlaying && <SpockCurrentGame />}
      {!spockState.isPlaying && <SpockNextGame />}
    </Flex>
  );
};

export default GameBoard;
