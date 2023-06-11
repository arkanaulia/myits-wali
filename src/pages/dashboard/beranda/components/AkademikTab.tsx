import { Box, Flex, Text } from "@chakra-ui/react";

const AkademikTab = () => {
  const ipk = 3.85;
  const sksTempuh = 120;
  const sksTotal = 144;
  const statusMahasiswa = "Aktif";
  return (
    <Flex alignItems="center" w="full" flexDirection="row" gap="32px">
      <Box alignItems="center" flexDirection="column">
        <Text fontSize="xl" color="gray.500" fontWeight="normal">
          IPK
        </Text>
        <Text fontSize="3xl" fontWeight="medium">
          {ipk}
        </Text>
      </Box>
      <Box alignItems="center" flexDirection="column">
        <Text fontSize="xl" color="gray.500" fontWeight="normal">
          SKS Lulus
        </Text>
        <Flex alignItems="end" gap="1">
          <Text fontSize="3xl" fontWeight="medium">
            {sksTempuh}
          </Text>
          <Text fontSize="xl" color="gray.500" fontWeight="medium">
            {sksTotal}
          </Text>
        </Flex>
      </Box>
      <Box alignItems="center" flexDirection="column">
        <Text fontSize="xl" color="gray.500" fontWeight="normal">
          Status Mahasiswa
        </Text>
        <Text fontSize="3xl" color="green.500" fontWeight="medium">
          {statusMahasiswa}
        </Text>
      </Box>
    </Flex>
  );
};

export default AkademikTab;
