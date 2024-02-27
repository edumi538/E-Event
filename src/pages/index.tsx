import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";
import Leyout from "@/components/Leyout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>E-mail Event</title>
        <meta name="description" content="Gerador de E-mails para eventos!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Leyout>
        <Flex
          className="first-access"
          flexDirection={"column"}
          alignItems={"center"}
        >
          <Heading
            as={"h1"}
            size={"4xl"}
            px="100px"
            textAlign={{ lg: "center" }}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
          >
            Bem vindo a melhor plataforma de envio de emails para eventos!
          </Heading>
          <Text
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            fontSize={{ base: "4xl", md: "3xl" }}
            px={"100px"}
            py={"30px"}
            textAlign={{ md: "center" }}
            fontWeight={"medium"}
          >
            Precisa enviar e-mails para seus eventos de forma simples e prática?
            não perde tempo
          </Text>
          <Button
            width={{ md: "200px", base: "300px" }}
            height={{ md: "70px", base: "100px" }}
            borderRadius={"full"}
            colorScheme="purple"
          >
            <Link
              style={{
                height: "100%",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              href={"/adicionar_eventos"}
            >
              <Text fontSize={{ md: "lg", base: "2xl" }}>Começe agora</Text>
            </Link>
          </Button>
        </Flex>
      </Leyout>
    </>
  );
}
