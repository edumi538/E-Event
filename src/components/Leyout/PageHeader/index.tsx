import { ArrowLeftIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  HStack,
  Heading,
  IconButton,
  Link,
  Tab,
  TabList,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";

interface IPageHeader {}

function PageHeader({}: IPageHeader) {
  const route = useRouter();
  console.log(route.pathname);
  return (
    <>
      <Flex
        justifyContent={{ base: "center", sm: "space-between" }}
        color={"whitesmoke"}
        alignItems={"center"}
        py={"4rem"}
        px={"4rem"}
        width={"100%"}
        height={"40px"}
      >
        <HStack spacing={5}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            size={{ base: "xl", sm: "lg" }}
          >
            E-Event
          </Heading>
          <svg
            style={{ width: 40, height: 40, color: "purple" }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
            />
          </svg>
        </HStack>
        {route.pathname != "/" && (
          <Link
            href={
              route.pathname == "/escrever_email" ? "/adicionar_eventos" : "/"
            }
          >
            <ArrowLeftIcon color={"pink.800"} boxSize={"30px"} />
          </Link>
        )}
      </Flex>
    </>
  );
}

export default PageHeader;
