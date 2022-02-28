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
    <Box
      bg="transparent"
      w={["280px", "320px", "360px", "400px"]}
      h={["240px", "280px", "300px", "340px"]}
      position="relative"
    >
      <PlayButton
        image={paperIcon}
        config={{
          top: "0",
          right: "0",
          left: [
            "calc(100% - 120px)",
            "calc(100% - 140px)",
            "calc(100% - 150px)",
            "calc(100% - 170px)",
          ],
          borderColor: "blue.600",
          position: "absolute",
          h: ["120px", "140px", "150px", "170px"],
          w: ["120px", "140px", "150px", "170px"],
          borderWidth: ["15px", "17px", "20px"],
        }}
        alt="paper-image"
        onClick={() => selectionHandler("PAPER")}
      />
      <PlayButton
        image={scissorsIcon}
        config={{
          top: [
            "calc(100% - 120px)",
            "calc(100% - 140px)",
            "calc(100% - 150px)",
            "calc(100% - 170px)",
          ],
          right: "0",
          left: "0",
          borderColor: "yellow.500",
          margin: "auto",
          position: "absolute",
          h: ["120px", "140px", "150px", "170px"],
          w: ["120px", "140px", "150px", "170px"],
          borderWidth: ["15px", "17px", "20px"],
        }}
        alt="scissors-image"
        onClick={() => selectionHandler("SCISSORS")}
      />
      <PlayButton
        image={rockIcon}
        config={{
          top: "0",
          right: "100%",
          left: "0",
          borderColor: "red.500",
          position: "absolute",
          h: ["120px", "140px", "150px", "170px"],
          w: ["120px", "140px", "150px", "170px"],
          borderWidth: ["15px", "17px", "20px"],
        }}
        onClick={() => selectionHandler("ROCK")}
        alt="rock-image"
      />
    </Box>
  );
};

export default CurrentGame;
