import {
  Button,
  Center,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ScaleFade,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useState } from "react";
import FormularioAdicionarEvento from "./form";
import { SubmitHandler, useForm } from "react-hook-form";

interface ModalAdicionarEventosProps {
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
  setCardNumbers: () => void;
}

type FormData = {
  NomeEvento: string;
  EmailEvento: string;
  DateEvento: Date;
};

function ModalAdicionarEventos({
  modalTitle,
  isOpen,
  onClose,
  setCardNumbers,
}: ModalAdicionarEventosProps) {
  const [file, setFile] = useState<Blob>();

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    new Promise((resolve) => {
      const newObject = { ...data, File: file };
      const storedEventos = localStorage.getItem("ArrayDeEventos");
      const dataArray: object[] = storedEventos
        ? JSON.parse(storedEventos)
        : [];
      dataArray.push(newObject);
      localStorage.setItem("ArrayDeEventos", JSON.stringify(dataArray));
      setCardNumbers();
      resolve(onClose());
    });
  };

  return (
    <>
      <Modal
        size={{ base: "full", md: "xl" }}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
            textAlign={{ base: "center", md: "initial" }}
            fontWeight={"bold"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            {modalTitle.toLocaleUpperCase()}
          </ModalHeader>
          <ModalCloseButton display={{ base: "none" }} />
          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <FormularioAdicionarEvento setFile={setFile} register={register} />
          </ModalBody>
          <ModalFooter>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              width={{ base: "full", md: "initial" }}
              colorScheme="pink"
              mr={4}
            >
              Criar Evento
            </Button>
            <Button
              width={{ base: "full", md: "initial" }}
              onClick={() => {
                setFile(undefined);
                onClose();
              }}
            >
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalAdicionarEventos;
