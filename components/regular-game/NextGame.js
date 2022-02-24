import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import Image from "next/image";

const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Flex>
      <Box>
        <Text>You Picked</Text>
        <Flex
          bg="red"
          h="170px"
          w="170px"
          borderRadius="50%"
          borderWidth="20px"
          borderColor="black"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={
              state.userPick === "ROCK"
                ? rockIcon
                : state.userPick === "PAPER"
                ? paperIcon
                : scissorsIcon
            }
            width="100%"
            height="100%"
          />
        </Flex>
      </Box>
      <Box>
        <Text>{state.result}</Text>
        <Button onClick={() => dispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      <Box>
        <Text>The House Picked</Text>
        <Flex
          bg="red"
          h="170px"
          w="170px"
          borderRadius="50%"
          borderWidth="20px"
          borderColor="black"
          justifyContent="center"
          alignItems="center"
        >
          <Image
            src={
              state.housePick === "ROCK"
                ? rockIcon
                : state.housePick === "PAPER"
                ? paperIcon
                : scissorsIcon
            }
            width="100%"
            height="100%"
          />
        </Flex>
      </Box>
    </Flex>
  );
};

export default NextGame;
