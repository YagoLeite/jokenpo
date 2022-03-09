import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import SpockHeader from "../../components/spock-game/SpockHeader";
import SpockRules from "../../components/spock-game/SpockRules";
import SpockGameBoard from "../../components/spock-game/SpockGameBoard";

export default function Home() {
  return (
    <VStack
      bgGradient="radial(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
      w="100%"
      h="100vh"
      pt="3%"
      position="relative"
      spacing={6}
    >
      <Head>
        <title>ROCK PAPER SCISSORS LIZARD SPOCK</title>
        <meta
          name="description"
          content="Rock, paper, scissors, lizard, spock game"
        />
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
        <SpockHeader />
      </Container>
      <SpockGameBoard />
      <HStack w="80%" justifyContent="space-between">
        <Button
          bg="transparent"
          color="white"
          borderWidth="1px"
          borderColor="hsl(217, 16%, 45%)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          <Link href="/">
            <Text color="white">Go to: NORMAL Level</Text>
          </Link>
        </Button>
        <SpockRules />
      </HStack>
    </VStack>
  );
}
