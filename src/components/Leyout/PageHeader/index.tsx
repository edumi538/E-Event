import {
  Box,
  Flex,
  HStack,
  Heading,
  Link,
  Tab,
  TabList,
  Tabs,
  VStack,
} from "@chakra-ui/react";
import React from "react";

interface IPageHeader {}

function PageHeader({}: IPageHeader) {
  return (
    <>
      <Flex
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={"center"}
        color={"whitesmoke"}
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
      </Flex>
    </>
  );
}

export default PageHeader;
