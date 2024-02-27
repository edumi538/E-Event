import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type IPageFooter = {};

function PageFooter({}: IPageFooter) {
  return (
    <Flex
      w={"100%"}
      h={"70px"}
      mt={{base:"20px"}}
      bgGradient={"linear(to-l, #7928CA, #FF0080)"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={4}
    >
      <Text
        fontWeight={"bold"}
        color={"gray.50"}
      >
        Powered By - Eduardo Miranda de Oliveira
      </Text>
    </Flex>
  );
}

export default PageFooter;
