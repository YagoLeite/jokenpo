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
import rulesImg from "../styles/images/image-rules.svg";

const Rules = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={rulesImg} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Rules;
