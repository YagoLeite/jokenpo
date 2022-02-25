import React from "react";
import { Box, Button, Flex, Text, Stack } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import PlayButton from "../buttons/PlayButton";

const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Stack direction={["column", "row"]} color="white">
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
        <Text fontSize={["20px", "40px"]}>{state.result}</Text>
        <Button onClick={() => dispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      <Box>
        <Text>House Picked</Text>
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
      </Box>
    </Stack>
  );
};

export default NextGame;
