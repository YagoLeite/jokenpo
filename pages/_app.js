import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import GameContext from "../Context/Context";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <GameContext>
        <Component {...pageProps} />
      </GameContext>
    </ChakraProvider>
  );
}

export default MyApp;
