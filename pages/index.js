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
      h="100vh"
      pt="5%"
      position="relative"
      spacing={10}
    >
      <Head>
        <title>Jokenpo</title>
        <meta name="description" content="Jokenpo game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
      </Container>
      <GameBoard />
      <HStack w="80%" justifyContent="space-between">
        <Button
          bg="transparent"
          color="white"
          borderWidth="1px"
          borderColor="hsl(217, 16%, 45%)"
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
        >
          <Link href="/spock">
            <Text color="white">go to spock</Text>
          </Link>
        </Button>
        <Rules />
      </HStack>
    </VStack>
  );
}
