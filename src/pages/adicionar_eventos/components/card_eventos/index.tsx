import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Checkbox,
  Collapse,
  Divider,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEventHandler, useState } from "react";
import { truncate } from "../../../../../utils/functions";

interface ICardEventos {
  Title: string;
  Email: string;
  DateEvento: Date | undefined;
  show: boolean;
  onToggle: () => void;
  setNumberCardIsChecked: (value: number) => void;
  NumberCardIsChecked: number;
  setArrayRemoveEvento: (value: any) => void;
  index: number;
}

type ValueCardChecked = {
  value: number;
  isChecked: boolean;
};

function CardEventos({
  Title,
  Email,
  DateEvento,
  show,
  onToggle,
  setNumberCardIsChecked,
  NumberCardIsChecked,
  setArrayRemoveEvento,
  index,
}: ICardEventos) {
  const date = DateEvento && new Date(DateEvento).toLocaleDateString("pt-Br");

  const onCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setNumberCardIsChecked(NumberCardIsChecked + 1);
      setArrayRemoveEvento((prevArray: number[]) => [
        ...prevArray,
        parseInt(value),
      ]);
    } else if (e.target.checked == false && NumberCardIsChecked >= 0) {
      setNumberCardIsChecked(NumberCardIsChecked - 1);
      setArrayRemoveEvento((prevArray: number[]) =>
        prevArray.filter((item) => item !== parseInt(value))
      );
    }
  };

  return (
    <Card backgroundColor="pink.50" width={"400px"}>
      <CardHeader>
        <HStack justifyContent={"space-between"}>
          <Heading
            bgGradient="linear(to-l, #7928CA, #FF0080)"
            bgClip="text"
            size="md"
          >
            {truncate(Title, show ? 40 : 22)}
          </Heading>
          <Checkbox
            value={index}
            onChange={onCheckboxChange}
            size={"lg"}
            borderColor={"pink.600"}
            colorScheme="pink"
          />
        </HStack>
      </CardHeader>
      <CardBody>
        <Collapse in={show}>
          <Text color={"pink.700"} fontWeight={"bold"}>
            Email:
          </Text>
          <Text color={"pink.900"}>{Email}</Text>
          <Text mt={10} color={"pink.700"} fontWeight={"bold"}>
            Data do Evento:
          </Text>
          <Text color={"pink.900"}>{date}</Text>
        </Collapse>
      </CardBody>
      <CardFooter backgroundColor={"pink.800"}>
        <Button onClick={onToggle} shadow={"md"} colorScheme="pink">
          Mostrar tudo
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CardEventos;
