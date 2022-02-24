import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/regular-game/Header";
import GameBoard from "../components/regular-game/GameBoard";
import Rules from "../components/regular-game/Rules";
import Link from "next/link";

export default function Home() {
  return (
    <Box
      bgGradient="radial(hsl(214, 47%, 23%), hsl(237, 49%, 15%))"
      w="100%"
      h="100vh"
      alignContent="center"
      justifyContent="center"
      position="relative"
    >
      <Head>
        <title>Jokenpo</title>
        <meta name="description" content="Jokenpo game" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Link href="/spock">
          <Text color="white">go to spock</Text>
        </Link>
      </Box>
      <Container>
        <Header />
      </Container>
      <GameBoard />
      <Rules />
    </Box>
  );
}
