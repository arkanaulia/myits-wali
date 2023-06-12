import { Avatar, Flex, Text, useBreakpointValue, VStack } from "@chakra-ui/react";

const HeaderProfile = () => {
  
  const avatarSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Flex
      alignItems="center"
      w="full"
      direction={{ base: "column", md: "row" }}
      gap="16px"
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
    </Flex>
  );
};

export default HeaderProfile;
