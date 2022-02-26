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
      <VStack order={["1", "1"]}>
        <Text>You Picked</Text>
        {state.userPick === "ROCK" ? (
          <PlayButton
            image={rockIcon}
            config={{
              borderColor: "red.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : state.userPick === "PAPER" ? (
          <PlayButton
            image={paperIcon}
            config={{
              borderColor: "blue.600",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : (
          <PlayButton
            image={scissorsIcon}
            config={{
              borderColor: "yellow.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        )}
      </VStack>
      <VStack w="100%" order={["3", "2"]}>
        <Text fontSize={["20px", "28px", "40px"]}>{state.result}</Text>
        <Button
          w="70%"
          minW="100px"
          color="hsl(229, 25%, 31%)"
          _hover={{ color: "red.400" }}
          onClick={() => dispatch({ type: "NEXT-GAME" })}
        >
          Play Again
        </Button>
      </VStack>
      <VStack order={["2", "3"]}>
        <Text>House Picked</Text>
        {state.housePick === "ROCK" ? (
          <PlayButton
            image={rockIcon}
            config={{
              borderColor: "red.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : state.housePick === "PAPER" ? (
          <PlayButton
            image={paperIcon}
            config={{
              borderColor: "blue.600",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : (
          <PlayButton
            image={scissorsIcon}
            config={{
              borderColor: "yellow.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        )}
      </VStack>
    </Stack>
  );
};

export default NextGame;
