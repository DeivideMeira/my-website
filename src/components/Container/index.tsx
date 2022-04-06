import { Flex } from "@chakra-ui/react";

export function Container() {
  return (
    <Flex
      maxWidth="1200px"
      my="0"
      mx="auto"
      py="0"
      px="2rem"
      minHeight="calc(100vh - 5rem)"
      bgColor={"#000"}
    >
    </Flex>
  );
}