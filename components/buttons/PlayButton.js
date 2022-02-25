import React from "react";
import { Flex } from "@chakra-ui/react";
import Image from "next/image";

const PlayButton = (props) => {
  return (
    <Flex
      bg="white"
      h={["140px", "150px", "170px"]}
      w={["140px", "150px", "170px"]}
      borderRadius="50%"
      borderWidth={["15px", "17px", "20px"]}
      justifyContent="center"
      alignItems="center"
      onClick={props.onClick}
      {...props.config}
    >
      <Image alt={props.alt} src={props.image} width="70%" height="70%" />
    </Flex>
  );
};

export default PlayButton;
