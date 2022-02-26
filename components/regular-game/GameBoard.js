import { Box, Button, Flex } from "@chakra-ui/react";
import React, { useEffect } from "react";
import Image from "next/image";
import triangleBg from "../../styles/images/bg-triangle.svg";
import { GameState } from "../../Context/Context";
import NextGame from "./NextGame";
import CurrentGame from "./CurrentGame";

const GameBoard = () => {
  const { state, dispatch } = GameState();

  useEffect(() => {
    dispatch({
      type: "LOADING",
      value: JSON.parse(localStorage.getItem("score")),
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("score", JSON.stringify(state.score));
  }, [state.score]);

  return (
    <Flex w="100%" justifyContent="center" alignItems="center">
      {state.isPlaying && <CurrentGame />}
      {!state.isPlaying && <NextGame />}
    </Flex>
  );
};

export default GameBoard;
