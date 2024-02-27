import React from "react";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import { Flex } from "@chakra-ui/react";
import PageBody from "./PageBody";
import { motion } from "framer-motion";

interface ILeyout {
  children: React.ReactNode;
}

function Leyout({ children }: ILeyout) {
  return (
    <Flex
      flexDirection={"column"}
      height={"100vh"}
      justifyContent={"space-between"}
      alignItems={"center"}
    >
      <PageHeader />
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <PageBody>{children}</PageBody>
      </motion.div>
      <PageFooter />
    </Flex>
  );
}

export default Leyout;
