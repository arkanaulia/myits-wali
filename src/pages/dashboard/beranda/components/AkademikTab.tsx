import { Box, Flex, Text } from "@chakra-ui/react";

const AkademikTab = () => {
  const ipk = 3.85;
  const sksTempuh = 120;
  const sksTotal = 144;
  const statusMahasiswa = "Aktif";
  return (
    <Flex
      alignItems={{ base: "left", md: "center" }}
      w="full"
      flexDirection="row"
      gap={{ base:'20px',md:"24px" }}
    >
      <Box alignItems="center" flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
        >
          IPK
        </Text>
        <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
          {ipk}
        </Text>
      </Box>
      <Box alignItems="center" flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
        >
          SKS Lulus
        </Text>
        <Flex alignItems="end" gap="1">
          <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
            {sksTempuh}
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="gray.500"
            fontWeight="500"
            mb='1'
          >
            /{sksTotal}
          </Text>
        </Flex>
      </Box>
      <Box alignItems="center" flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
          noOfLines={1}
        >
          Status Mahasiswa
        </Text>
        <Text
          fontSize={{ sm: "2xl", md: "3xl" }}
          color="green.500"
          fontWeight="500"
        >
          {statusMahasiswa}
        </Text>
      </Box>
    </Flex>
  );
};

export default AkademikTab;
