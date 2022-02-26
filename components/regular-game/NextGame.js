import React from "react";
import { Button, Text, VStack, Grid, GridItem } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import PlayButton from "../buttons/PlayButton";

const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Grid
      gridTemplateColumns={["repeat(2, 1fr)", "repeat(3, 1fr)"]}
      gap={4}
      color="white"
    >
      <VStack spacing={[6, 10]}>
        <Text letterSpacing={[2, 2, 3]} fontSize={["16px", "16px", "24px"]}>
          You Picked
        </Text>
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
      <GridItem
        rowStart={["2", "1"]}
        colStart={["1", "2"]}
        colEnd={["-1", "2"]}
      >
        <VStack
          w="100%"
          h="100%"
          order={["3", "2"]}
          justify="center"
          align="center"
        >
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
      </GridItem>
      <VStack spacing={[6, 10]}>
        <Text letterSpacing={[2, 2, 3]} fontSize={["16px", "16px", "24px"]}>
          The House Picked
        </Text>
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
    </Grid>
  );
};

export default NextGame;
