import {
  Avatar,
  Flex,
  Text,
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";

const HeaderProfile = () => {
  const avatarSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Flex
      alignItems="center"
      w="full"
      direction={{ base: "column", md: "row" }}
      gap="16px"
      justifyContent={{ base: "", md: "" }}
    >
      <Flex alignItems="center">
        <Avatar size={avatarSize} name="avatar" src="/img/avatars/avatar.png" />
        <VStack ml="8" align="flex-start" spacing="0">
          <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="500">
            Arkan Aulia Farhan
          </Text>
          <Text fontSize={{ base: "lg", md: "xl" }}>05111940000128</Text>
          <Text fontSize={{ base: "lg", md: "xl" }} color="gray.500">
            Teknik Informatika 2019
          </Text>
        </VStack>
      </Flex>

      {/* <Flex
        direction="column"
        gap={{ md:"1" }}
        px={{ base: "0", md: "6" }}
        py={{ base: "0", md: "4" }}
        boxShadow={{ base: "", md: "sm" }}
        border={{ base: "", md: "1px" }}
        borderColor={{ base: "biru.100", md: "biru.100" }}
        rounded="2xl"
        bg={{ base: "", md: "white" }}
      >
        <Text color="gray.600" fontSize={{ base:'md',md:"lg" }}>
          Status Pembayaran
        </Text>
        <Text fontSize={{ base:'2xl',md:"3xl" }} fontWeight="500" color="red.500">
          Belum Lunas
        </Text>
      </Flex> */}
    </Flex>

  );
};

export default HeaderProfile;
