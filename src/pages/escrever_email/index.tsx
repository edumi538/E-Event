import Leyout from "@/components/Leyout";
import RichTextCustom from "@/components/RichText";
import {
  Alert,
  AlertIcon,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import AddEmails from "./components/AddEmails";
import { AddIcon } from "@chakra-ui/icons";
import ModalPreview from "./components/ModalPreview";
import { sendEmailFake } from "../api/requests";
import { mockEmails } from "../../../utils/mocks";

interface IEscreverEmail {}

const CustomEditor = dynamic(
  () => {
    return import("../../components/RichText");
  },
  { ssr: false }
);

function EscreverEmail({}: IEscreverEmail) {
  const [editorContent, setEditorContent] = useState("");
  const [emailInputs, setEmailInputs] = useState([{ id: 0, email: "" }]);
  const [showAlert, setShowAlert] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setEmailInputs(emailInputs.concat(mockEmails));
  }, []);

  const addEmailInput = () => {
    const newIndex = emailInputs.length;
    setEmailInputs([...emailInputs, { id: newIndex, email: "" }]);
  };

  const removeEmailInput = (id: number) => {
    setEmailInputs(emailInputs.filter((input) => input.id !== id));
  };

  const handleEmailChange = (value: string, id: number) => {
    setEmailInputs(
      emailInputs.map((input) =>
        input.id === id ? { ...input, email: value } : input
      )
    );
  };

  async function sendData(
    editorContent: string,
    emailInputs: { id: number; email: string }[]
  ) {
    const Data = {
      EmailContent: editorContent,
      EmailAddress: emailInputs,
    };

    const response = await sendEmailFake(Data);
    //Fazer alguma coisa com esse response
    /*     if (response.status == 200) {
      setShowAlert(true);
    } */
    setShowAlert(true);
  }

  return (
    <>
      <Head>
        <title>Escrever Email</title>
        <meta name="description" content="Gerador de E-mails para eventos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalPreview
        emailContent={editorContent}
        title="Preview"
        onClose={onClose}
        isOpen={isOpen}
      />
      {showAlert && (
        <Alert status="success">
          <AlertIcon />
          Seu Email foi enviado com sucesso!
        </Alert>
      )}
      <Leyout>
        {" "}
        <VStack spacing={10}>
          <Heading
            display={{ base: "none", md: "flex" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            as={"h2"}
            size={"3xl"}
            textAlign={"center"}
            px={"50px"}
          >
            Pronto pra mandar e-mail para todos os seus clientes?
          </Heading>
          <Heading
            color={"pink.900"}
            display={{ base: "none", md: "flex" }}
            as={"h3"}
            size={"md"}
            textAlign={"center"}
            px={"100px"}
          >
            Utilize o campo abaixo para escrever seu e-mail, sinta-se a vontade
            de escrever da forma que achar melhor, nossa ferramenta te da a
            possibilidade de editar o texto da forma que você preferir
          </Heading>
          <CustomEditor
            editorContent={editorContent}
            setEditorContent={setEditorContent}
          />
          <Heading
            color={"pink.900"}
            display={{ base: "none", md: "flex" }}
            as={"h3"}
            size={"md"}
            textAlign={"center"}
            px={"100px"}
          >
            Adicione os endereços de e-mail que receberam a mensagem.
          </Heading>
          <HStack onClick={addEmailInput} cursor={"pointer"}>
            <Text>Adicionar</Text>
            <AddIcon boxSize={"15px"} />
          </HStack>
          {emailInputs.map((input, index) => (
            <>
              <Flex
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                mb={-10}
              >
                <AddEmails
                  key={index}
                  setEmails={handleEmailChange}
                  email={input.email}
                  id={input.id}
                  index={index}
                />

                <Button
                  onClick={() => removeEmailInput(input.id)}
                  colorScheme="pink"
                  boxSize={"45px"}
                  marginBottom={5}
                >
                  -
                </Button>
              </Flex>
            </>
          ))}
          <ButtonGroup>
            <Button
              onClick={() => sendData(editorContent, emailInputs)}
              w={"100%"}
              size={"lg"}
              borderRadius={"full"}
              fontSize={"xl"}
              colorScheme={"pink"}
            >
              Enviar
            </Button>
            <Button
              onClick={onOpen}
              w={"100%"}
              size={"lg"}
              borderRadius={"full"}
              fontSize={"xl"}
              colorScheme={"purple"}
              variant={"outline"}
            >
              Preview
            </Button>
          </ButtonGroup>
        </VStack>
      </Leyout>
    </>
  );
}

export default EscreverEmail;
