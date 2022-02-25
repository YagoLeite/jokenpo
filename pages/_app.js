import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import GameContext from "../Context/Context";
import "@fontsource/barlow-semi-condensed/600.css";
import theme from "../components/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <GameContext>
        <Component {...pageProps} />
      </GameContext>
    </ChakraProvider>
  );
}

export default MyApp;
