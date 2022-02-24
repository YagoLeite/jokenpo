import React from "react";
import {
  Modal,
  Button,
  ModalBody,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  useDisclosure,
  ModalCloseButton,
} from "@chakra-ui/react";
import Image from "next/image";
import rulesImg from "../../styles/images/image-rules-bonus.svg";

const SpockRules = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Rules</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Rules</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={rulesImg} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SpockRules;
