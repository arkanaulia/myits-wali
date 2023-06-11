import { useState } from "react";
import { Box, Text, Flex, Icon, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { IoMdArrowDropdownCircle } from "react-icons/io";

type Data = {
  id?: number;
  name?: string;
  description?: string;
  semester?: string;
  sks?: string;
  nilai?: string;
  ips?: string;
};

type DropdownProps = {
  data: Data[];
};

const Dropdown = ({ data }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const ips = "3.75";
  return (
    <Box
      overflow="hidden"
      borderRadius="xl"
      transition="all 0.3s ease-in-out"
      bg={isOpen ? "blur" : ""}
      backdropFilter={isOpen ? "blur(10px)" : ""}
      boxShadow={isOpen ? "sm" : "sm"}
      border={isOpen ? "1px" : "1px"}
      borderColor="gray.200"
    >
      <Flex
        align="center"
        justify=""
        cursor="pointer"
        onClick={handleToggle}
        w="full"
        borderRadius="xl"
        transition="all 0.2s ease-in-out"
        _hover={{ bg: "biru.100" }} // Atur warna latar belakang saat hover
        p="4"
      >
        <Icon
          mr="8"
          boxSize={8}
          as={IoMdArrowDropdownCircle}
          transform={isOpen ? "rotate(180deg)" : undefined}
          transition="transform 0.3s ease-in-out"
        />
        
          <Flex
            
            direction="row"
            justify="space-between"
            alignItems="center"
            w="full"
          >{data && data.map((item) => (
            <Flex direction="column" gap="1" key={item.id}>
              <Text w="full" fontSize="2xl" fontWeight="medium">
                {item.semester}
              </Text>
              <Text fontSize="lg" w="full">
                {item.sks}
              </Text>
            </Flex>
            ))}
              <Flex align="center" gap='2' direction="row" py='2' px='4' rounded='xl' bg='green.100'>
                <Text fontSize="xl" fontWeight="medium" color="green.500">
                  Nilai Semester:
                </Text>
                <Text fontSize="2xl" fontWeight="medium">
                  {ips}
                </Text>
              </Flex>
            
          </Flex>
        
      </Flex>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          height: isOpen ? "auto" : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{ overflow: "hidden" }}
      >
        <Box px={8} mb="4" mt="-4">
          {data.map((item) => (
            <Flex justify="space-between" alignItems="center" key={item.id}>
              <Flex direction="column" mt="2" gap="1">
                <Text w="full" fontSize="xl" fontWeight="medium">
                  {item.name}
                </Text>
                <Text mb='2' fontSize="lg">{item.description}</Text>
              </Flex>
              {item.nilai && (
                <Center
                  rounded="xl"
                  alignItems="center"
                  justifyContent="center"
                  h="48px"
                  w="120px"
                  color="biru.500"
                  bg="biru.100"
                >
                  <Text fontWeight="medium">{item.nilai}</Text>
                </Center>
              )}
            </Flex>
          ))}
        </Box>
      </motion.div>
    </Box>
  );
};

export default Dropdown;
