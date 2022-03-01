import React from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";

const SpockHeader = () => {
  const { spockState } = GameState();

  return (
    <Flex
      justifyContent="space-between"
      borderWidth="3px"
      borderRadius="8px"
      borderColor="hsl(217, 16%, 45%)"
      p="3%"
    >
      <Box fontSize={["20px", "24px"]}>
        <Text color="white" mb="-15px">
          ROCK
        </Text>
        <Text color="white" mb="-15px">
          PAPER
        </Text>
        <Text color="white" mt="-15px">
          SCISSORS
        </Text>
        <Text color="white" mt="-15px">
          LIZARD
        </Text>
        <Text color="white" mt="-15px">
          SPOCK
        </Text>
      </Box>
      <VStack bg="white" w="25%" borderRadius="4px" pt="1px" pb="1px">
        <Text fontSize="14px" color="hsl(229, 64%, 46%)">
          SCORE
        </Text>
        <Text fontSize={["38px", "50px"]} color="hsl(229, 25%, 31%)">
          {spockState.score.youWon || "0"}
        </Text>
      </VStack>
    </Flex>
  );
};

export default SpockHeader;
