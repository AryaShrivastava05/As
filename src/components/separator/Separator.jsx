import { Flex } from "@chakra-ui/react";
import React from "react";

const HSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex h='1px' w='100%' bg='rgba(84, 90, 135, 0.3)' {...rest}></Flex>;
};

const VSeparator = (props) => {
  const { variant, children, ...rest } = props;
  return <Flex w='1px' bg='rgba(84, 90, 135, 0.3)' {...rest}></Flex>;
};

export { HSeparator, VSeparator };
