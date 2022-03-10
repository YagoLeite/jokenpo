import {
  Box,
  Container,
  Flex,
  VStack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/regular-game/Header";
import GameBoard from "../components/regular-game/GameBoard";
import Rules from "../components/regular-game/Rules";
import Link from "next/link";

export default function Home() {
  return (
    <VStack
      bgGradient="radial(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
      w="100%"
      h="fit-content"
      py="5%"
      position="relative"
      spacing={10}
    >
      <Head>
        <title>ROCK PAPER SCISSORS</title>
        <meta name="description" content="Rock, paper, scissors game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Button
          bg="transparent"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          w="100%"
        >
          <a
            href="https://github.com/YagoLeite"
            target="_blank"
            rel="noreferrer"
          >
            <Text
              bgGradient="linear(to-r, #C9FFBF, #FFAFBD)"
              bgClip="text"
              fontSize="24px"
              letterSpacing={3}
              _hover={{
                bgGradient: "linear(to-r, pink.200, yellow.400, gray.300)",
                bgClip: "text",
              }}
            >
              Made by: Yago Leite
            </Text>
          </a>
        </Button>
        <Header />
      </Container>
      <GameBoard />
      <HStack
        w="80%"
        justifyContent="space-between"
        fontSize={["12px", "14px", "28px"]}
      >
        <Button
          bg="transparent"
          color="white"
          borderWidth="1px"
          borderColor="hsl(217, 16%, 45%)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          <Link href="/spock">
            <Text color="white">Go to: HARD Level</Text>
          </Link>
        </Button>
        <Rules />
      </HStack>
    </VStack>
  );
}
