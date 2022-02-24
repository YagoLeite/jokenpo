import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GameState } from "../Context/Context";
const NextGame = () => {
  const { state, dispatch } = GameState();

  return (
    <Flex>
      <Box>
        <Text>You Picked</Text>
        <Button>{state.userPick}</Button>
      </Box>
      <Box>
        <Text>{state.result}</Text>
        <Button onClick={() => dispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      <Box>
        <Text>The House Picked</Text>
        <Button>{state.housePick}</Button>
      </Box>
    </Flex>
  );
};

export default NextGame;
