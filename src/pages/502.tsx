import { Button, Center, Image, Text } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";

export default function BadReq() {
  return (
    <Center h="" flexDirection="column" gap="2" p="10">
      <Image
        src="/img/icons/502.png"
        alt="404"
        w="auto"
        h={{ base: "32", md: "48" }}
        my="4"
      />
      <Text
        fontSize={{ base: "3xl", md: "4xl" }}
        fontWeight="600"
        color="gray.500"
        align="center"
      >
        502 - Bad Gateway
      </Text>
      <Text fontSize={{ base: "lg", md: "xl" }} color="gray.800" align="center">
      Ada kendala saat meminta data.
      </Text>
      <Button
        fontSize={{ base: "md", md: "lg" }}
        rightIcon={<MdArrowForwardIos />}
        colorScheme="blue"
        fontWeight="500"
        variant="its"
        size="lg"
        rounded="lg"
        my="2"
      >
        Kembali Ke Beranda
      </Button>
    </Center>
  );
}
