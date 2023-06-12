import { Box, Flex, Image, Text } from "@chakra-ui/react";

type Data = {
  id?: number;
  nama?: string;
  desc?: string;
  jenis?: string;
  waktu?: string;
  icon?: string;
};

type EkskulListProps = {
  data?: Data[];
};

const EkskulList = ({ data }: EkskulListProps) => {
  if (!data || data.length === 0) {
    return <Text>No data available</Text>;
  }

  return (
    <Box w="full">
      {data.map((item) => (
        <Flex w="full" direction="column" key={item.id}>
          {item.nama && (
            <Flex justifyContent="space-between" mt={{ base:'2',md:"4" }} alignItems="center" w="full">
              <Flex alignItems="center" gap="4">
                <Box w='40px'>
                  <Image src={`/img/icons/${item.icon}.png`} h={{ base:'30px',md:"40px" }} w={{ base:'30px',md:"40px" }} alt="medali" />
                </Box>
                <Box>
                  <Text fontSize={{ base:'lg',md:"xl" }} fontWeight="500">
                    {item.nama}
                  </Text>
                  <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
                    {item.desc}
                  </Text>
                </Box>
              </Flex>
              <Flex display={{ base:'none', md:'block' }} direction="column" alignItems="end">
                <Text fontSize={{ base:'lg',md:"xl" }} fontWeight="500">
                  {item.jenis}
                </Text>
                <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
                  {item.waktu}
                </Text>
              </Flex>
            </Flex>
          )}
        </Flex>
      ))}
    </Box>
  );
};

export default EkskulList;
