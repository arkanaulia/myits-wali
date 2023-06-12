import { useState } from "react";
import { Box, Text, Flex, Icon, Center, Divider } from "@chakra-ui/react";
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
        direction={{ base:'row-reverse', md:'row' }}
        cursor="pointer"
        onClick={handleToggle}
        w="full"
        borderRadius="xl"
        transition="all 0.2s ease-in-out"
        _hover={{ bg: "biru.100" }} // Atur warna latar belakang saat hover
        p="4"
      >
        <Icon
          mr={{ base:'0',md:"8" }}
          boxSize={8}
          as={IoMdArrowDropdownCircle}
          transform={isOpen ? "rotate(180deg)" : undefined}
          transition="transform 0.3s ease-in-out"
        />

        <Flex
          direction={{ base:'column',md:"row" }}
          justify="space-between"
          alignItems={{ base:'left',md:"center" }}
          w="full"
        >
          {data &&
            data.map((item) => (
              <Flex direction="column" gap="1" key={item.id}>
                <Text
                  w="full"
                  fontSize={{ base: "xl", md: "2xl" }}
                  fontWeight="500"
                >
                  {item.semester}
                </Text>
                <Text fontSize={{ base: "md", md: "lg" }} w="full">
                  {item.sks}
                </Text>
              </Flex>
            ))}
          <Flex
            align="center"
            gap="2"
            direction="row"
            py="2"
            px="4"
            rounded="xl"
            bg="green.100"
            w='max-content'
          >
            <Text
              fontSize={{ base: "md", md: "xl" }}
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
        <Box px={8} mb="4" mt="-4">
          {data &&
            data.map((item) => (
              <Flex justify="space-between" direction={{ base:'column',md:'row' }} alignItems={{ base:'left',md:"center" }} key={item.id}>
                <Flex direction="column" mt={{ md:"2" }} gap="1">
                  <Divider display={{ base:'block', md:'none' }} orientation="horizontal" mb='2' borderColor='gray.400' />
                  <Text
                    w="full"
                    fontSize={{ base: "md", md: "xl" }}
                    fontWeight="500"
                  >
                    {item.name}
                  </Text>
                  <Text mb="2" fontSize={{ base: "md", md: "lg" }}>
                    {item.description}
                  </Text>
                </Flex>
                {item.nilai && (
                  <Center
                    rounded="xl"
                    alignItems="center"
                    justifyContent="center"
                    h={{ base:'30px',md:"48px" }}
                    w={{ base:'100px',md:"120px" }}
                    color="biru.500"
                    bg="biru.100"
                    mb={{ base:'4',md:"0" } }
                  >
                    <Text fontSize={{ base:'sm',md:'md' }} fontWeight="500">{item.nilai}</Text>
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
