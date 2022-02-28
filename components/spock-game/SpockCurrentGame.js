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
  const test = 400;
  return (
    // <Flex>
    //   <Button onClick={() => selectionHandler("ROCK")}>Rock</Button>
    //   <Button onClick={() => selectionHandler("PAPER")}>Paper</Button>
    //   <Button onClick={() => selectionHandler("SCISSORS")}>Scissors</Button>
    //   <Button onClick={() => selectionHandler("LIZARD")}>Lizard</Button>
    //   <Button onClick={() => selectionHandler("SPOCK")}>Spock</Button>
    // </Flex>
    <Box
      h={["300px", "340px", "400px"]}
      w={["300px", "340px", "400px"]}
      position="relative"
    >
      {/* <Box position="absolute" top="0" right="50%">
        1
      </Box> */}
      <PlayButton
        image={scissorsIcon}
        config={{
          borderColor: "yellow.500",
          h: ["60px", "80px", "105px"],
          w: ["60px", "80px", "105px"],
          borderWidth: ["7px", "10px"],
          top: "0",
          left: ["calc(50% - 30px)", "calc(50% - 40px)", "calc(50% - 50.5px)"],
          position: "absolute",
        }}
      />
      <PlayButton
        image={rockIcon}
        config={{
          borderColor: "red.500",
          h: ["60px", "80px", "105px"],
          w: ["60px", "80px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(34.5% - 30px)",
            "calc(34.5% - 40px)",
            "calc(34.5% - 50.5px)",
          ],
          left: "2.5%",
          position: "absolute",
        }}
      />
      {/* <Box position="absolute" top="34.5%" left="2.5%">
         2
       </Box> */}
      {/* <Box position="absolute" top="34.5%" right="2.5%">
        3
      </Box> */}
      <PlayButton
        image={spockIcon}
        config={{
          borderColor: "blue.200",
          h: ["60px", "80px", "105px"],
          w: ["60px", "80px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(34.5% - 30px)",
            "calc(34.5% - 40px)",
            "calc(34.5% - 50.5px)",
          ],
          right: "2.5%",
          position: "absolute",
        }}
      />
      {/* <Box position="absolute" top="90.5%" left="20.6%">
        4
      </Box> */}
      <PlayButton
        image={rockIcon}
        config={{
          borderColor: "red.500",
          h: ["60px", "80px", "105px"],
          w: ["60px", "80px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(90.5% - 60px)",
            "calc(90.5% - 80px)",
            "calc(90.5% - 105px)",
          ],
          left: "20.6%",
          position: "absolute",
        }}
      />
      {/* <Box position="absolute" top="90.5%" right="20.6%">
        5
      </Box> */}
      <PlayButton
        image={rockIcon}
        config={{
          borderColor: "red.500",
          h: ["60px", "80px", "105px"],
          w: ["60px", "80px", "105px"],
          borderWidth: ["7px", "10px"],
          top: [
            "calc(90.5% - 60px)",
            "calc(90.5% - 80px)",
            "calc(90.5% - 105px)",
          ],
          right: "20.6%",
          position: "absolute",
        }}
      />
    </Box>
  );
};

export default CurrentGame;
