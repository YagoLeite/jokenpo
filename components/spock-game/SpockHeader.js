import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";

const SpockHeader = () => {
  const { spockState } = GameState();

  return (
    <Flex
      justifyContent="space-between"
      borderWidth="1px"
      borderRadius="15px"
      p="5px"
    >
      <Box>
        <Text color="white">ROCK</Text>
        <Text color="white">PAPER</Text>
        <Text color="white">SCISSORS</Text>
        <Text color="white">LIZARD</Text>
        <Text color="white">SPOCK</Text>
      </Box>
      <Box>
        <Text color="white">Score</Text>
        <Text color="white">{spockState.score.numberOfMatches || ""}</Text>
      </Box>
    </Flex>
  );
};

export default SpockHeader;
