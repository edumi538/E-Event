import Leyout from "@/components/Leyout";
import {
  Button,
  ButtonGroup,
  Center,
  Flex,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Wrap,
  WrapItem,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import ModalAdicionarEventos from "./components/modal_adicionar_evento";
import CardEventos from "./components/card_eventos";
import { it } from "node:test";
import { ArrowRightIcon, MinusIcon, PlusSquareIcon } from "@chakra-ui/icons";
import { IEventos } from "../../../types/generic_interface";
import { GetDataEventFake, setDataEventFake } from "../api/requests";
import Head from "next/head";
import Link from "next/link";

interface AdicionarEventosProps {
  Data: IEventos;
}

function AdicionarEventos({ Data }: AdicionarEventosProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [NumberCardIsChecked, setNumberCardIsChecked] = useState(0);
  const [ArrayRemoveEvento, setArrayRemoveEvento] = useState<number[]>([]);
  const [CardNumbers, setCardNumbers] = useState(0);

  const [EventoStored, setEventoStored] = useState<IEventos[]>();

  const [showStates, setShowStates] = useState<boolean[]>(
    new Array(EventoStored && EventoStored.length).fill(false)
  );

  console.log(ArrayRemoveEvento);

  useEffect(() => {
    const storedData = localStorage.getItem("ArrayDeEventos");
    if (storedData) {
      setEventoStored(JSON.parse(storedData));
    } else {
      setEventoStored(undefined);
    }
  }, [CardNumbers]);

  const handleToggle = (index: number) => {
    const updatedStates = [...showStates];
    updatedStates[index] = !updatedStates[index];
    setShowStates(updatedStates);
  };

  function RemoverEventos(ArrayRemoveEvento: number[]) {
    new Promise((resolve) => {
      const storedData = localStorage.getItem("ArrayDeEventos");
      if (storedData) {
        const newArray: object[] = JSON.parse(storedData).filter(
          (item: any, index: number) => !ArrayRemoveEvento.includes(index)
        );
        localStorage.setItem("ArrayDeEventos", JSON.stringify(newArray));
      }
      setArrayRemoveEvento([]);
      setNumberCardIsChecked(0);
      if (CardNumbers >= 0) setCardNumbers(CardNumbers - 1);
      resolve(setNumberCardIsChecked(NumberCardIsChecked - 1));
    });
  }

  function SelectEventosToSendEmail(ArrayRemoveEvento: number[]) {
    new Promise((resolve) => {
      const storedData = localStorage.getItem("ArrayDeEventos");
      if (storedData) {
        const newArray: object[] = JSON.parse(storedData).filter(
          (item: any, index: number) => !ArrayRemoveEvento.includes(index)
        );
        resolve(
          localStorage.setItem("EventsSelected", JSON.stringify(newArray))
        );
      }
    });
  }

  async function AdicionarEventosFake() {
    const res = await setDataEventFake(EventoStored);
    //Fazer alguma coisa com esse Response
  }

  return (
    <>
      <Head>
        <title>Adicionar Eventos</title>
        <meta name="description" content="Gerador de E-mails para eventos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ModalAdicionarEventos
        setCardNumbers={() => setCardNumbers(CardNumbers + 1)}
        modalTitle="Criar Evento"
        isOpen={isOpen}
        onClose={onClose}
      />
      <Leyout>
        <VStack spacing={"25px"} className="desktop-view-eventos">
          <Heading
            display={{ base: "none", md: "flex" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            as={"h2"}
            size={"3xl"}
            textAlign={"center"}
            px={"50px"}
          >
            {`Selecione os eventos dos quais você quer mandar emails`}
          </Heading>
          {EventoStored && EventoStored.length < 1 ? (
            <>
              <Center
                className="box-sem-eventos"
                display={{ base: "none", md: "flex" }}
                width={"90%"}
                height={"md"}
                shadow={"lg"}
              >
                <VStack spacing={"20px"}>
                  <div onClick={onOpen} className="btn-open-modal">
                    <svg
                      style={{
                        width: "200px",
                        height: "200px",
                        color: "GrayText",
                        cursor: "pointer",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <Text
                    color={"GrayText"}
                    fontSize={"3xl"}
                    textAlign={"center"}
                    px={"30px"}
                  >
                    Você não possui eventos adicionados ainda, clique para
                    adicionar um evento novo!
                  </Text>
                </VStack>
              </Center>
              <Center
                display={{ base: "flex", md: "none" }}
                className="mobile-view-eventos"
              >
                <VStack spacing={"20px"}>
                  <div onClick={onOpen} className="btn-open-modal">
                    <svg
                      style={{
                        width: "150px",
                        height: "150px",
                        color: "GrayText",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                      />
                    </svg>
                  </div>
                  <Text
                    color={"GrayText"}
                    textAlign={"center"}
                    fontSize={"3xl"}
                    px={"30px"}
                  >
                    Você não possui eventos adicionados ainda, clique para
                    adicionar um evento novo!
                  </Text>
                </VStack>
              </Center>
            </>
          ) : (
            <>
              <VStack
                height={"xl"}
                justifyContent={"space-between"}
                alignItems={"center"}
                overflowY={"auto"}
              >
                <Wrap justify={"center"} marginTop={20} spacing={10}>
                  {EventoStored &&
                    EventoStored.map(
                      (
                        item: {
                          NomeEvento: string;
                          EmailEvento: string;
                          DateEvento: Date | undefined;
                        },
                        index
                      ): React.ReactNode => (
                        <WrapItem key={index}>
                          <CardEventos
                            setNumberCardIsChecked={setNumberCardIsChecked}
                            NumberCardIsChecked={NumberCardIsChecked}
                            setArrayRemoveEvento={setArrayRemoveEvento}
                            Title={item.NomeEvento}
                            Email={item.EmailEvento}
                            DateEvento={item.DateEvento}
                            show={showStates[index]}
                            onToggle={() => handleToggle(index)}
                            key={index}
                            index={index}
                          />
                        </WrapItem>
                      )
                    )}
                </Wrap>
              </VStack>
              <ButtonGroup>
                <Button
                  onClick={onOpen}
                  borderRadius={"full"}
                  ml={10}
                  leftIcon={<PlusSquareIcon />}
                  colorScheme="pink"
                  variant="outline"
                >
                  Adicionar
                </Button>{" "}
                {NumberCardIsChecked > 0 && (
                  <Button
                    onClick={() => RemoverEventos(ArrayRemoveEvento)}
                    borderRadius={"full"}
                    ml={10}
                    leftIcon={<MinusIcon />}
                    colorScheme="red"
                    variant="outline"
                  >
                    Remover
                  </Button>
                )}
              </ButtonGroup>
              <Flex width={"100%"} mr={"20px"} justifyContent={"flex-end"}>
                {NumberCardIsChecked > 0 && (
                  <Button
                    onClick={() => {
                      SelectEventosToSendEmail(ArrayRemoveEvento);
                    }}
                    colorScheme="purple"
                    rightIcon={<ArrowRightIcon />}
                  >
                    <Link
                      style={{
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      href={"/escrever_email"}
                    >
                      Próximo
                    </Link>
                  </Button>
                )}
              </Flex>
            </>
          )}
        </VStack>
      </Leyout>
    </>
  );
}

export const getServerSideProps = async () => {
  //Get Data Fake
  const res = await GetDataEventFake();
  return {
    props: {
      data: [
        {
          EventoNome: "Evento 1",
          EventoEmail: "evento1@gmail.com",
          DataEvento: "2024-05-20",
        },
      ],
    },
  };
};

export default AdicionarEventos;
