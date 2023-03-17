import React from "react";
import { Flex, Box, Text, VStack } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";

const Header = () => {
  const { state } = GameState();
  console.log(state.userPick);

  return (
    <Flex
      justifyContent="space-between"
      borderWidth="3px"
      borderRadius="8px"
      borderColor="hsl(217, 16%, 45%)"
      p="3%"
    >
      <Flex
        h="100%"
        direction="column"
        gap="5px"
        fontSize={["20px", "24px", "30px"]}
      >
        <Text color="white">ROCK</Text>
        <Text color="white">PAPER</Text>
        <Text color="white">SCISSORS</Text>
      </Flex>
      <VStack bg="white" w="25%" borderRadius="4px" pt="1px" pb="1px">
        <Text fontSize="14px" color="hsl(229, 64%, 46%)">
          SCORE
        </Text>
        <Text fontSize={["38px", "50px"]} color="hsl(229, 25%, 31%)">
          {state.score.youWon || "0"}
        </Text>
      </VStack>
    </Flex>
  );
};

export default Header;
