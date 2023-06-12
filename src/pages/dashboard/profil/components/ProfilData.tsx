import { Box, Text, Flex } from "@chakra-ui/react";

interface DataItem {
  title: string;
  value: string;
}

interface Props {
  data: DataItem[];
}

const DataList = ({ data }: Props) => {
  return (
    <Flex direction='column' gap='2' w='full'>
      {data && data.map((item, index) => (
        <Box key={index} w='full' mb={2}>
          <Text fontSize={{ base:'lg',md:'xl' }} fontWeight="500">{item.title}</Text>
          <Text fontSize={{ base:'lg',md:'xl' }} fontWeight='normal'>{item.value}</Text>
        </Box>
      ))}
    </Flex>
  );
};

export default DataList;
