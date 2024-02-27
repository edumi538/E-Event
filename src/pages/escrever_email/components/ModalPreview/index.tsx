import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

interface IModalPreview {
  onClose: () => void;
  isOpen: boolean;
  title: string;
  emailContent: string;
}

function ModalPreview({ onClose, isOpen, title, emailContent }: IModalPreview) {
  return (
    <>
      <Modal onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            {title}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div dangerouslySetInnerHTML={{ __html: emailContent }} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPreview;
