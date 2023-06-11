import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

const HeaderProfile = () => {
  return (
    <Flex alignItems="center" w="full" justifyContent="">
      <Flex alignItems="center">
        <Avatar size="lg" name="avatar" src="/img/avatars/avatar.png" />
        <VStack ml="8" align="flex-start" spacing="0">
          <Text fontSize="2xl" fontWeight="medium">
            Arkan Aulia Farhan
          </Text>
          <Text fontSize="xl">05111940000128</Text>
          <Text fontSize="xl" color="gray.500">
            Teknik Informatika 2019
          </Text>
        </VStack>
      </Flex>
      
    </Flex>
  );
};

export default HeaderProfile;
