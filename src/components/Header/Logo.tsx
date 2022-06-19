import { Flex, Image, Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Flex gap={3}>
      <Flex gap={1}>
        <Text
          fontSize={["2xl", "3xl"]}
          fontWeight="bold"
          letterSpacing="tight"
          color={"green.400"}
        >
          SATC
        </Text>
        <Text as="span" color="yellow.400" ml="1" fontSize={["2xl", "3xl"]}>
          Sun
        </Text>
      </Flex>
      <Image w={10} h={10} src="/assets/sun.png" />
    </Flex>
  );
}
