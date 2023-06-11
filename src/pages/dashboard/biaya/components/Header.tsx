import { Avatar, Flex, Text, VStack } from "@chakra-ui/react";

const HeaderProfile = () => {
  return (
    <Flex alignItems="center" w="full" justifyContent="space-between">
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
      <Flex alignItems="center" flexDirection="row" gap="32px">
        <Flex direction='column' gap='1' px='6' py='4' boxShadow='sm' border='1px' borderColor='biru.100' rounded='2xl' bg='white'>
          <Text color='gray.600' fontSize='lg'>Status Pembayaran</Text>
          <Text fontSize="3xl" fontWeight="medium" color='red.500'>Belum Lunas</Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderProfile;
