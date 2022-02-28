import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import Image from "next/image";

const PlayButton = (props) => {
  return (
    <Flex
      bg="white"
      borderRadius="50%"
      justifyContent="center"
      alignItems="center"
      onClick={props.onClick}
      {...props.config}
    >
      <Box width="40%" height="40%">
        <Image alt={props.alt} src={props.image} layout="responsive" />
      </Box>
    </Flex>
  );
};

export default PlayButton;
