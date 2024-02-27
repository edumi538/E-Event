"use client";

import {
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Image,
  Input,
  VStack,
} from "@chakra-ui/react";
import React, { ChangeEvent, useState } from "react";
import { SubmitHandler, UseFormRegister, useForm } from "react-hook-form";
import { GenerateBlobUrl } from "../../../../../utils/functions";

interface IFormularioAdicionarEvento {
  setFile: (file: Blob | undefined) => void;
  register: UseFormRegister<any>;
}

function FormularioAdicionarEvento({
  register,
  setFile,
}: IFormularioAdicionarEvento) {
  return (
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
  );
}

export default FormularioAdicionarEvento;
