import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
const SpockNextGame = () => {
  const { spockState, spockDispatch } = GameState();

  return (
    <Flex>
      <Box>
        <Text>You Picked</Text>
        <Button>{spockState.userPick}</Button>
      </Box>
      <Box>
        <Text>ahsudhausdhuashd</Text>
        <Button onClick={() => spockDispatch({ type: "NEXT-GAME" })}>
          Next Game
        </Button>
      </Box>
      <Box>
        <Text>The House Picked</Text>
        <Button>{spockState.housePick}</Button>
      </Box>
    </Flex>
  );
};

export default SpockNextGame;
