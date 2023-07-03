import { useState } from "react";
import { Box, Text, Flex, Icon, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { IoMdArrowDropdownCircle } from "react-icons/io";
import { Semester } from "types/list-nilai";

const Dropdown = ({ semesterNumber, sks, ips, listNilai }: Semester) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
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
        direction={{ base: "row-reverse", md: "row" }}
        cursor="pointer"
        onClick={handleToggle}
        w="full"
        borderRadius="xl"
        transition="all 0.2s ease-in-out"
        _hover={{ bg: "biru.100" }} // Atur warna latar belakang saat hover
        p="4"
      >
        <Icon
          mr={{ base: "0", md: "8" }}
          boxSize={8}
          color='biru.400'
          as={IoMdArrowDropdownCircle}
          transform={isOpen ? "rotate(180deg)" : undefined}
          transition="transform 0.3s ease-in-out"
        />

        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          alignItems={{ base: "left", md: "center" }}
          w="full"
        >
          <Flex direction="column" gap="1" key={semesterNumber}>
            <Text
              w="full"
              fontSize={{ base: "xl", md: "2xl" }}
              fontWeight="500"
            >
              {semesterNumber}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} w="full">
              {sks}
            </Text>
          </Flex>

          <Flex
            align="center"
            gap="2"
            direction="row"
            py="2"
            px="4"
            rounded="xl"
            bg="green.100"
            w="max-content"
          >
            <Text
              fontSize={{ base: "md", md: "lg" }}
              fontWeight="500"
              color="green.500"
            >
              Nilai Semester:
            </Text>
            <Text fontSize={{ base: "lg", md: "2xl" }} fontWeight="500">
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
        <Box px={8} mb="2">
          {listNilai.map((list) => (
            <Flex
              justify="space-between"
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "left", md: "center" }}
              borderTop="1px"
              borderColor="gray.400"
              py="2"
              key={list.id}
            >
              <Flex direction="column" mt={{ md: "2" }} gap="1" w="full">
                <Text
                  w="full"
                  fontSize={{ base: "md", md: "xl" }}
                  fontWeight="500"
                >
                  {list.name}
                </Text>
                <Text mb="2" fontSize={{ base: "md", md: "lg" }}>
                  {list.description}
                </Text>
              </Flex>
              {list.nilai && (
                <Center
                  rounded="xl"
                  alignItems="center"
                  justifyContent="center"
                  h={{ base: "30px", md: "48px" }}
                  w={{ base: "100px", md: "120px" }}
                  color="biru.500"
                  bg="biru.100"
                  mb={{ base: "4", md: "0" }}
                >
                  <Text fontSize={{ base: "sm", md: "md" }} fontWeight="500">
                    {list.nilai}
                  </Text>
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
