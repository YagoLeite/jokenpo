import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { GameState } from "../../Context/Context";
import rockIcon from "../../styles/images/icon-rock.svg";
import paperIcon from "../../styles/images/icon-paper.svg";
import scissorsIcon from "../../styles/images/icon-scissors.svg";
import Image from "next/image";

const CurrentGame = () => {
  const { state, dispatch } = GameState();

  const selectionHandler = (option) => {
    dispatch({ type: "SUBMIT", value: option });
  };
  return (
    <Flex>
      <Flex
        bg="red"
        h="170px"
        w="170px"
        borderRadius="50%"
        borderWidth="20px"
        borderColor="black"
        justifyContent="center"
        alignItems="center"
        onClick={() => selectionHandler("ROCK")}
      >
        <Image src={rockIcon} width="100%" height="100%" />
      </Flex>
      <Flex
        bg="red"
        h="170px"
        w="170px"
        borderRadius="50%"
        borderWidth="20px"
        borderColor="black"
        justifyContent="center"
        alignItems="center"
        onClick={() => selectionHandler("PAPER")}
      >
        <Image src={paperIcon} width="100%" height="100%" />
      </Flex>
      <Flex
        bg="red"
        h="170px"
        w="170px"
        borderRadius="50%"
        borderWidth="20px"
        borderColor="black"
        justifyContent="center"
        alignItems="center"
        onClick={() => selectionHandler("SCISSORS")}
      >
        <Image src={scissorsIcon} width="100%" height="100%" />
      </Flex>
    </Flex>
  );
};

export default CurrentGame;
