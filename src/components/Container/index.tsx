import { Flex } from "@chakra-ui/react";
import React from 'react';

type MyComponentProps = React.PropsWithChildren<{}>;

export function ContainerLayout({children, ...restProps}: MyComponentProps) {
  return (
    <Flex
      maxWidth="1200px"
      my="0"
      mx="auto"
      py="0"
      px="2rem"
      pr= "0px"
      pl= "0px"
      minHeight="calc(100vh - 5rem)"
      bgColor={"#fff"}
      {...restProps}
    >
      {children}
    </Flex>
  );
}