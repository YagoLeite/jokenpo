import React from "react";
import { Box, Button, Flex, Text, Stack, VStack } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import PlayButton from "../buttons/PlayButton";

const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Stack
      direction={["column", "row"]}
      justifyContent="space-between"
      alignItems="center"
      color="white"
      w="80%"
      maxW="800px"
    >
      <VStack>
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
      </VStack>
      <VStack w="100%">
        <Text fontSize={["20px", "28px", "40px"]}>{state.result}</Text>
        <Button
          w="70%"
          color="hsl(229, 25%, 31%)"
          _hover={{ color: "red.400" }}
          onClick={() => dispatch({ type: "NEXT-GAME" })}
        >
          Play Again
        </Button>
      </VStack>
      <VStack>
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
      </VStack>
    </Stack>
  );
};

export default NextGame;
