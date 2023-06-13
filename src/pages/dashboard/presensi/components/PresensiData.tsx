/* react/jsx-key */
import React, { useState, useEffect } from "react";
import {
  Box,
  Select,
  VStack,
  Flex,
  Icon,
  Text,
  Divider,
  Center,
} from "@chakra-ui/react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { motion } from "framer-motion";

// Data dummy untuk daftar presensi
const presensiData = [
  {
    id: 1,
    mataKuliah: "Grafika Komputer",
    description: "Kamis, 13.00 - 15.40",
    hadir: 1,
    tidakHadir: 1,
    keterangan: [
      { pertemuan: 1, keterangan: "Hadir", date: "Kamis, 5 Juni 2023" },
      { pertemuan: 2, keterangan: "Alpa", date: "Kamis, 12 Juni 2023" },
      // ...
    ],
    semester: "semester1",
  },
  {
    id: 3,
    mataKuliah: "Realitas Virtual dan Augmented Reality",
    description: "Kamis, 13.00 - 15.40 ",
    hadir: 1,
    tidakHadir: 1,
    keterangan: [
      { pertemuan: 1, keterangan: "Hadir", date: "Kamis, 12 Juni 2023" },
      { pertemuan: 2, keterangan: "Alpa", date: "Kamis, 12 Juni 2023" },
      // ...
    ],
    semester: "semester1",
  },
  {
    id: 2,
    mataKuliah: "Jaringan Komputer",
    description: "Kamis, 13.00 - 15.40 ",
    hadir: 1,
    tidakHadir: 1,
    keterangan: [
      { pertemuan: 1, keterangan: "Hadir", date: "Kamis, 12 Juni 2023" },
      { pertemuan: 2, keterangan: "Sakit", date: "Kamis, 12 Juni 2023" },
      // ...
    ],
    semester: "semester2",
  },
  // ...
];

type Presensi = {
  id: number;
  mataKuliah: string;
  description: string;
  hadir: number;
  tidakHadir: number;
  keterangan: { pertemuan: number; keterangan: string; date: string }[];
  semester: string;
};

const PresensiComponent = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  useEffect(() => {
    // Cek apakah ada semester yang tersedia dalam data presensi
    if (presensiData.length > 0) {
      setSelectedSemester(presensiData[0].semester); // Set nilai default sebagai semester pertama
    }
  }, []);

  const handleChangeSemester = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSemester(event.target.value);
  };

  const filteredPresensiData: Presensi[] = presensiData.filter(
    (presensi) => presensi.semester === selectedSemester
  );

  const [isOpen, setIsOpen] = useState<{ [id: number]: boolean }>({});

  const handleToggle = (id: number) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <Box w="100%">
      <Flex mb="6" alignItems="center" justify="space-between">
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          w={{ base: "28", md: "max-content" }}
          fontWeight="500"
        >
          Detail Presensi
        </Text>
        <Box>
          <Select
            bg="white"
            value={selectedSemester}
            onChange={handleChangeSemester}
            fontSize={{ base: "md", md: "lg" }}
            border="1px"
            borderColor="gray.800"
            w={{ base: "150px", md: "200px" }}
          >
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
            {/* Tambahkan opsi semester lainnya di sini */}
          </Select>
        </Box>
      </Flex>

      <VStack align="stretch" spacing={{ base:'3', md:'1' }}>
        {filteredPresensiData.map((presensi) => (
          <Box
            key={presensi.id}
            borderRadius="xl"
            transition="all 0.3s ease-in-out"
            bg={isOpen[presensi.id] ? "blur" : ""}
            backdropFilter={isOpen[presensi.id] ? "blur(10px)" : ""}
            boxShadow={isOpen[presensi.id] ? "sm" : "sm"}
            border={isOpen[presensi.id] ? "1px" : "1px"}
            borderColor="gray.200"
            w="full"
          >
            <Flex
              align="center"
              justify="space-between"
              cursor="pointer"
              direction={{ base: "column", md: "row" }}
              onClick={() => handleToggle(presensi.id)}
              borderRadius="xl"
              py={{ base: "3", md: "4" }}
              px={{ base: "3", md: "4" }}
              transition="all 0.2s ease-in-out"
              w="full"
              gap={{ base: "2", md: "0" }}
              _hover={{ bg: "biru.100" }} // Atur warna latar belakang saat hover
            >
              <Flex
                align="left"
                w={{ base: "full", md: "max-content" }}
                justify={{ base: "space-between", md: "" }}
                direction={{ base: "row-reverse", md: "row" }}
                alignItems="center"
              >
                <Icon
                  mr={{ base: "0", md: "8" }}
                  boxSize={8}
                  as={IoIosArrowDropdownCircle}
                  transform={isOpen[presensi.id] ? "rotate(180deg)" : undefined}
                  transition="transform 0.3s ease-in-out"
                />
                <Flex align="left" direction="column" gap={{ base:'1', md:'0' }} alignItems="center">
                  <Text
                    w="full"
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    {presensi.mataKuliah}
                  </Text>
                  <Text
                    w="full"
                    fontSize={{ base: "lg", md: "xl" }}
                    fontWeight="normal"
                  >
                    {presensi.description}
                  </Text>
                </Flex>
              </Flex>
              <Flex align={{ base:'left',md:"center" }} w={{ base:'full', md:'max-content' }} direction="column">
                  <Text fontSize="md" fontWeight="500" color="green.500">
                    Kehadiran
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    100%
                  </Text>
                </Flex>
            </Flex>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isOpen[presensi.id] ? 1 : 0,
                height: isOpen[presensi.id] ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <Box px={{ base:'4', md:'8' }} mb="6">
              <Divider
                  orientation="horizontal"
                 
                  borderColor="gray.300"
                />
              <Flex alignItems="center" gap={{ base:'0',md:'4' }} direction="row" w='full' my='4' justify={{ base:'center',md:'left' }}>
                
              
                <Flex align="center" direction="column">
                  <Text fontSize={{ base:'md',md:"lg" }} fontWeight="500" color="green.500">
                    Hadir
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    {presensi.hadir}
                  </Text>
                </Flex>
                <Divider
                  orientation="vertical"
                  mx="4"
                  borderColor="gray.400"
                  h="50px"
                />
                <Flex align="center" direction="column">
                  <Text fontSize={{ base:'md',md:"lg" }} fontWeight="500" color="yellow.500">
                    Izin
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    {presensi.tidakHadir}
                  </Text>
                </Flex>
                <Divider
                  orientation="vertical"
                  mx="4"
                  borderColor="gray.400"
                  h="50px"
                />
                <Flex align="center" direction="column">
                  <Text fontSize={{ base:'md',md:"lg" }} fontWeight="500" color="blue.500">
                    Sakit
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    {presensi.tidakHadir}
                  </Text>
                </Flex>
                <Divider
                  orientation="vertical"
                  mx="4"
                  borderColor="gray.400"
                  h="50px"
                />
                <Flex align="center" direction="column">
                  <Text fontSize={{ base:'md',md:"lg" }} fontWeight="500" color="red.500">
                    Alpa
                  </Text>
                  <Text
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="500"
                  >
                    {presensi.tidakHadir}
                  </Text>
                </Flex>
                
              </Flex>
                {presensi.keterangan.map((keterangan) => (
                  <Box mb="4">
                    <Divider
                      mb="2"
                      borderColor="gray.300"
                      orientation="horizontal"
                      w="full"
                    />
                    <Flex
                      justify="space-between"
                      alignItems="center"
                      key={presensi.id}
                    >
                      <Flex direction="column" mt="2" gap="1">
                        <Text w="full" fontSize={{ base:'lg',md:"xl" }} fontWeight="500">
                          Pertemuan {keterangan.pertemuan}
                        </Text>
                        <Text fontSize={{ base:'md',md:"lg" }}>{keterangan.date}</Text>
                      </Flex>
                      {keterangan.pertemuan && (
                        <Center
                          rounded="xl"
                          alignItems="center"
                          justifyContent="center"
                          h={{ base:'32px',md:"48px" }}
                          w={{ base:'80px',md:"120px" }}
                          mt="2"
                          color={
                            keterangan.keterangan === "Sakit"
                              ? "yellow.500"
                              : keterangan.keterangan === "Hadir"
                              ? "green.500"
                              : keterangan.keterangan === "Alpa"
                              ? "red.500"
                              : "biru.500"
                          }
                          bg={
                            keterangan.keterangan === "Sakit"
                              ? "yellow.100"
                              : keterangan.keterangan === "Hadir"
                              ? "green.100"
                              : keterangan.keterangan === "Alpa"
                              ? "red.100"
                              : "biru.100"
                          }
                        >
                          <Text fontWeight="500">
                            {keterangan.keterangan}
                          </Text>
                        </Center>
                      )}
                    </Flex>
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default PresensiComponent;
