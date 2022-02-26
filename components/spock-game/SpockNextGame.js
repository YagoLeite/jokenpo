import React from "react";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import spockIcon from "../../styles/images/icon-spock.svg";
import lizardIcon from "../../styles/images/icon-lizard.svg";
import { Button, Text, Grid, GridItem, VStack } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import PlayButton from "../buttons/PlayButton";

const SpockNextGame = () => {
  const { spockState, spockDispatch } = GameState();

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
        {spockState.userPick === "ROCK" ? (
          <PlayButton
            image={rockIcon}
            config={{
              borderColor: "red.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.userPick === "PAPER" ? (
          <PlayButton
            image={paperIcon}
            config={{
              borderColor: "blue.600",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.userPick === "SCISSORS" ? (
          <PlayButton
            image={scissorsIcon}
            config={{
              borderColor: "yellow.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.userPick === "LIZARD" ? (
          <PlayButton
            image={lizardIcon}
            config={{
              borderColor: "purple.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : (
          <PlayButton
            image={spockIcon}
            config={{
              borderColor: "blue.200",
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
          <Text fontSize={["20px", "28px", "40px"]}>{spockState.result}</Text>
          <Button
            w="70%"
            minW="100px"
            color="hsl(229, 25%, 31%)"
            _hover={{ color: "red.400" }}
            onClick={() => spockDispatch({ type: "NEXT-GAME" })}
          >
            Play Again
          </Button>
        </VStack>
      </GridItem>
      <VStack spacing={[6, 10]}>
        <Text letterSpacing={[2, 2, 3]} fontSize={["16px", "16px", "24px"]}>
          The House Picked
        </Text>
        {spockState.housePick === "ROCK" ? (
          <PlayButton
            image={rockIcon}
            config={{
              borderColor: "red.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.housePick === "PAPER" ? (
          <PlayButton
            image={paperIcon}
            config={{
              borderColor: "blue.600",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.housePick === "SCISSORS" ? (
          <PlayButton
            image={scissorsIcon}
            config={{
              borderColor: "yellow.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : spockState.housePick === "LIZARD" ? (
          <PlayButton
            image={lizardIcon}
            config={{
              borderColor: "purple.500",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        ) : (
          <PlayButton
            image={spockIcon}
            config={{
              borderColor: "blue.200",
              h: ["140px", "150px", "200px"],
              w: ["140px", "150px", "200px"],
            }}
          />
        )}
      </VStack>
    </Grid>
  );
};

export default SpockNextGame;
