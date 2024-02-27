import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Input,
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
/* import FormularioAdicionarEvento from "./form";
 */import { SubmitHandler, useForm } from "react-hook-form";

interface ModalAdicionarEventosProps {
  modalTitle: string;
  isOpen: boolean;
  onClose: () => void;
  setCardNumbers: () => void;
}

export type FormData = {
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
            {modalTitle}
          </ModalHeader>
          <ModalCloseButton display={{ base: "none" }} />
          <ModalBody
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <form>
              <Flex flexDirection={{ base: "column" }}>
                <FormControl
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  alignItems={{ md: "center" }}
                >
                  <FormLabel
                    width={{ md: "30%" }}
                    fontSize={{ base: "xl", md: "sm" }}
                    fontWeight={"medium"}
                    color={"GrayText"}
                  >
                    Nome do Evento:
                  </FormLabel>
                  <Input
                    {...register("NomeEvento")}
                    type="text"
                    width={{ md: "80%" }}
                    shadow={"base"}
                  />
                </FormControl>
                <FormControl
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  mt={{ base: "20px" }}
                  alignItems={{ md: "center" }}
                >
                  <FormLabel
                    width={{ md: "30%" }}
                    fontSize={{ base: "xl", md: "sm" }}
                    fontWeight={"medium"}
                    color={"GrayText"}
                  >
                    E-mail do Evento:
                  </FormLabel>
                  <Input
                    {...register("EmailEvento")}
                    type="text"
                    width={{ md: "80%" }}
                    shadow={"base"}
                  />
                </FormControl>
                <FormControl
                  display={"flex"}
                  flexDirection={{ base: "column", md: "row" }}
                  mt={{ base: "20px" }}
                  alignItems={{ md: "center" }}
                >
                  <FormLabel
                    width={{ md: "30%" }}
                    fontSize={{ base: "xl", md: "sm" }}
                    fontWeight={"medium"}
                    color={"GrayText"}
                  >
                    Data do Evento:
                  </FormLabel>
                  <Input
                    {...register("DateEvento")}
                    type="date"
                    width={{ md: "80%" }}
                    shadow={"base"}
                  />
                </FormControl>
              </Flex>
            </form>
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
