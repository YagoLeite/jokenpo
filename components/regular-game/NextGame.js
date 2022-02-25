import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import Image from "next/image";
import PlayButton from "../buttons/PlayButton";

const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Flex color="white">
      <Box>
        <Text>You Picked</Text>
        {state.userPick === "ROCK" ? (
          <PlayButton image={rockIcon} config={{ borderColor: "red.500" }} />
        ) : state.userPick === "PAPER" ? (
          <PlayButton image={paperIcon} config={{ borderColor: "blue.600" }} />
        ) : (
          <PlayButton
            image={scissorsIcon}
            config={{ borderColor: "yellow.500" }}
          />
        )}
      </Box>
      <Box>
        <Text>{state.result}</Text>
        <Button onClick={() => dispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      {state.housePick === "ROCK" ? (
        <PlayButton image={rockIcon} config={{ borderColor: "red.500" }} />
      ) : state.housePick === "PAPER" ? (
        <PlayButton image={paperIcon} config={{ borderColor: "blue.600" }} />
      ) : (
        <PlayButton
          image={scissorsIcon}
          config={{ borderColor: "yellow.500" }}
        />
      )}
    </Flex>
  );
};

export default NextGame;
