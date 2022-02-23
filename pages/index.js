import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Header from "../components/Header";
import GameBoard from "../components/GameBoard";
import Rules from "../components/Rules";

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
      <Container>
        <Header />
      </Container>
      <GameBoard />
      <Rules />
    </Box>
  );
}
