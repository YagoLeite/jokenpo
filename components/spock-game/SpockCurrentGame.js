import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import PlayButton from "../buttons/PlayButton";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import spockIcon from "../../styles/images/icon-spock.svg";
import lizardIcon from "../../styles/images/icon-lizard.svg";

const CurrentGame = () => {
  const { spockState, spockDispatch } = GameState();

  const selectionHandler = (option) => {
    spockDispatch({ type: "SUBMIT", value: option });
  };
  return (
    <Box
      h={["300px", "340px", "400px"]}
      w={["300px", "340px", "400px"]}
      position="relative"
    >
      <PlayButton
        image={scissorsIcon}
        config={{
          borderColor: "yellow.500",
          h: ["70px", "90px", "105px"],
          w: ["70px", "90px", "105px"],
          borderWidth: ["7px", "10px"],
          top: "0",
          left: ["calc(50% - 35px)", "calc(50% - 45px)", "calc(50% - 50.5px)"],
          position: "absolute",
        }}
        onClick={() => selectionHandler("SCISSORS")}
      />
      <PlayButton
        image={spockIcon}
        config={{
          borderColor: "blue.200",
          h: ["70px", "90px", "105px"],
          w: ["70px", "90px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(34.5% - 35px)",
            "calc(34.5% - 45px)",
            "calc(34.5% - 50.5px)",
          ],
          left: "2.5%",
          position: "absolute",
        }}
        onClick={() => selectionHandler("SPOCK")}
      />
      <PlayButton
        image={paperIcon}
        config={{
          borderColor: "blue.600",
          h: ["70px", "90px", "105px"],
          w: ["70px", "90px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(34.5% - 35px)",
            "calc(34.5% - 45px)",
            "calc(34.5% - 50.5px)",
          ],
          right: "2.5%",
          position: "absolute",
        }}
        onClick={() => selectionHandler("PAPER")}
      />
      <PlayButton
        image={lizardIcon}
        config={{
          borderColor: "purple.500",
          h: ["70px", "90px", "105px"],
          w: ["70px", "90px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(90.5% - 70px)",
            "calc(90.5% - 90px)",
            "calc(90.5% - 105px)",
          ],
          left: "20.6%",
          position: "absolute",
        }}
        onClick={() => selectionHandler("LIZARD")}
      />
      <PlayButton
        image={rockIcon}
        config={{
          borderColor: "red.500",
          h: ["70px", "90px", "105px"],
          w: ["70px", "90px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(90.5% - 70px)",
            "calc(90.5% - 90px)",
            "calc(90.5% - 105px)",
          ],
          right: "20.6%",
          position: "absolute",
        }}
        onClick={() => selectionHandler("ROCK")}
      />
    </Box>
  );
};

export default CurrentGame;
