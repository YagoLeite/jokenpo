import { Box, Container, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import SpockHeader from "../../components/spock-game/SpockHeader";
import SpockRules from "../../components/spock-game/SpockRules";
import SpockGameBoard from "../../components/spock-game/SpockGameBoard";

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
        <Link href="/">
          <Text color="white">rock paper scissors</Text>
        </Link>
      </Box>
      <Container>
        <SpockHeader />
      </Container>
      <SpockGameBoard />
      <SpockRules />
    </Box>
  );
}
