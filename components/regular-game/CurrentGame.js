import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import Image from "next/image";
import PlayButton from "../buttons/PlayButton";

const CurrentGame = () => {
  const { state, dispatch } = GameState();

  const selectionHandler = (option) => {
    dispatch({ type: "SUBMIT", value: option });
  };
  return (
    <Box bg="transparent" w="400px" h="340px" position="relative">
      <PlayButton
        image={rockIcon}
        config={{
          top: "0",
          right: "100%",
          left: "0",
          borderColor: "red.500",
          position: "absolute",
        }}
        onClick={() => selectionHandler("ROCK")}
      />
      <PlayButton
        image={paperIcon}
        config={{
          top: "0",
          right: "0",
          left: "calc(100% - 170px)",
          borderColor: "blue.600",
          position: "absolute",
        }}
        onClick={() => selectionHandler("PAPER")}
      />
      <PlayButton
        image={scissorsIcon}
        config={{
          top: "calc(100% - 170px)",
          right: "0",
          left: "0",
          borderColor: "yellow.500",
          margin: "auto",
          position: "absolute",
        }}
        onClick={() => selectionHandler("SCISSORS")}
      />
    </Box>
  );
};

export default CurrentGame;
