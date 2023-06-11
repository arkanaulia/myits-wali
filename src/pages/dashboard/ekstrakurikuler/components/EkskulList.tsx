
import {
  Box,
  Text,
  Flex,
  Image,
} from "@chakra-ui/react";

type Data = {
  id?: number;
  judul?: string;
  nama?: string;
  desc?: string;
  jenis?: string;
  waktu?: string;
  icon?: string;
};

type DropdownProps = {
  data: Data[];
};

const EkskulList = ({ data }: DropdownProps) => {
  return (
    <Box w="full">
      {data.map((item) => (
        <Flex w="full" direction='column' key={item.id}>
         
          {item.nama && (
            <Flex justifyContent="space-between" mt='4' alignItems="center" w="full">
              <Flex alignItems="center" gap="4">
                <Box>
                  <Image
                    src={`/img/icons/${item.icon}.png`}
                    h="40px"
                    w="40px"
                    alt="medali"
                  />
                </Box>
                <Box>
                  <Text fontSize="xl" fontWeight="medium">
                    {item.nama}
                  </Text>
                  <Text fontSize="lg" fontWeight="normal">
                    {item.desc}
                  </Text>
                </Box>
              </Flex>
              <Flex direction="column" alignItems="end">
                <Text fontSize="xl" fontWeight="medium">
                  {item.jenis}
                </Text>
                <Text fontSize="lg" fontWeight="normal">
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
