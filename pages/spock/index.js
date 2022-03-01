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
      spacing={10}
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
