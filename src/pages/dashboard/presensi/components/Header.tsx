import { Avatar, Divider, Flex, Text, VStack } from "@chakra-ui/react";

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
        <Flex
          direction="column"
          gap="1"
          px="6"
          py="4"
          boxShadow="sm"
          border="1px"
          borderColor="gray.200"
          rounded="2xl"
          bg="blur"
          backdropFilter="blur(10px)"
        >
          <Text color="gray.600" fontSize="lg">
            Absensi Semester ini
          </Text>
          <Flex gap="6" alignItems="center">
            <Flex align="center" direction="column">
              <Text fontSize="xl" fontWeight="medium" color="green.500">
                Hadir
              </Text>
              <Text fontSize="3xl" fontWeight="medium">
                5
              </Text>
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" h="60px" />
            <Flex align="center" direction="column">
              <Text fontSize="xl" fontWeight="medium" color="biru.500">
                Izin
              </Text>
              <Text fontSize="3xl" fontWeight="medium">
                5
              </Text>
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" h="60px" />
            <Flex align="center" direction="column">
              <Text fontSize="xl" fontWeight="medium" color="yellow.500">
                Sakit
              </Text>
              <Text fontSize="3xl" fontWeight="medium">
                5
              </Text>
            </Flex>
            <Divider orientation="vertical" borderColor="gray.400" h="60px" />
            <Flex align="center" direction="column">
              <Text fontSize="xl" fontWeight="medium" color="red.500">
                Alpa
              </Text>
              <Text fontSize="3xl" fontWeight="medium">
                5
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderProfile;
