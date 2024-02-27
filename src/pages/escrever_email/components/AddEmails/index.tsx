import {
  AddIcon,
  CheckIcon,
  CloseIcon,
  EmailIcon,
  MinusIcon,
  PhoneIcon,
  PlusSquareIcon,
  SmallAddIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";

interface IAddEmailsProps {
  id: number;
  setEmails: (value: string, id: number) => void;
  email: string;
  index: number;
}

function AddEmails({ id, setEmails, email, index }: IAddEmailsProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setEmails(value, id);
  };

  return (
    <>
      <Stack
        mt={-6}
        justifyContent={"center"}
        display={"flex"}
        divider={<StackDivider />}
      >
        <Box>
          <InputGroup>
            <InputLeftElement height={"100%"} pointerEvents="none">
              <EmailIcon boxSize={"20px"} color="pink.500" />
            </InputLeftElement>
            <Input
              color={"pink.700"}
              width={"lg"}
              size={"lg"}
              type="email"
              placeholder="Endereço de E-Mail"
              onChange={handleChange}
              value={email}
            />
          </InputGroup>
        </Box>
      </Stack>
    </>
  );
}

export default AddEmails;
