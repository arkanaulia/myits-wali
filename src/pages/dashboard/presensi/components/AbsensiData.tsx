/* react/jsx-key */
import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
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

// Data dummy untuk daftar absensi
const absensiData = [
  {
    id: 1,
    mataKuliah: "Grafika Komputer",
    description: "Setiap Kamis",
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
    description: "Setiap Kamis",
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
    description: "Setiap Kamis",
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

type Absensi = {
  id: number;
  mataKuliah: string;
  description: string;
  hadir: number;
  tidakHadir: number;
  keterangan: { pertemuan: number; keterangan: string; date: string }[];
  semester: string;
};

const AbsensiComponent = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  useEffect(() => {
    // Cek apakah ada semester yang tersedia dalam data absensi
    if (absensiData.length > 0) {
      setSelectedSemester(absensiData[0].semester); // Set nilai default sebagai semester pertama
    }
  }, []);

  const handleChangeSemester = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSemester(event.target.value);
  };

  const filteredAbsensiData: Absensi[] = absensiData.filter(
    (absensi) => absensi.semester === selectedSemester
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
        <Heading fontSize="3xl" fontWeight="semibold">
          Detail Absensi
        </Heading>
        <Box>
          <Select
            bg="white"
            value={selectedSemester}
            onChange={handleChangeSemester}
            fontSize="lg"
            border="1px"
            borderColor="gray.800"
            w="200px"
          >
            <option value="semester1">Semester 1</option>
            <option value="semester2">Semester 2</option>
            {/* Tambahkan opsi semester lainnya di sini */}
          </Select>
        </Box>
      </Flex>

      <VStack align="stretch" spacing={1}>
        {filteredAbsensiData.map((absensi) => (
          <Box
            key={absensi.id}
            borderRadius="xl"
            transition="all 0.3s ease-in-out"
            bg={isOpen[absensi.id] ? "blur" : ""}
            backdropFilter={isOpen[absensi.id] ? "blur(10px)" : ""}
            boxShadow={isOpen[absensi.id] ? "sm" : "sm"}
            border={isOpen[absensi.id] ? "1px" : "1px"}
            borderColor="gray.200"
          >
            <Flex
              align="center"
              justify="space-between"
              cursor="pointer"
              onClick={() => handleToggle(absensi.id)}
              borderRadius="xl"
              py="4"
              px='4'
              transition="all 0.2s ease-in-out"
              _hover={{ bg: "biru.100" }} // Atur warna latar belakang saat hover
            >
              <Flex align="left" direction="row" alignItems="center">
              <Icon
                mr="8"
                boxSize={8}
                as={IoIosArrowDropdownCircle}
                transform={isOpen[absensi.id] ? "rotate(180deg)" : undefined}
                transition="transform 0.3s ease-in-out"
              />
              <Flex align="left" direction="column" alignItems="center">
                <Text w="full" fontSize="2xl" fontWeight="medium">
                  {absensi.mataKuliah}
                </Text>
                <Text w="full" fontSize="xl" fontWeight="normal">
                  {absensi.description}
                </Text>
              </Flex>
              </Flex>
              <Flex alignItems="center" direction="row">
                <Flex align="center" direction="column">
                  <Text fontSize="md" fontWeight="medium" color="green.500">
                    Hadir
                  </Text>
                  <Text fontSize="2xl" fontWeight="medium">
                    {absensi.hadir}
                  </Text>
                </Flex>
                <Divider
                  orientation="vertical"
                  mx="4"
                  borderColor="gray.400"
                  h="50px"
                />
                <Flex align="center" direction="column">
                  <Text fontSize="md" fontWeight="medium" color="red.500">
                    Absen
                  </Text>
                  <Text fontSize="2xl" fontWeight="medium">
                    {absensi.tidakHadir}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isOpen[absensi.id] ? 1 : 0,
                height: isOpen[absensi.id] ? "auto" : 0,
              }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ overflow: "hidden" }}
            >
              <Box px={8} mb="6">
                {absensi.keterangan.map((keterangan) => (
                  <Box mb="4">
                    <Divider
                      mb='2'
                      borderColor="gray.300"
                      orientation="horizontal"
                      w="full"
                    />
                    <Flex
                      justify="space-between"
                      alignItems="center"
                      key={absensi.id}
                    >
                      <Flex direction="column" mt="2" gap="1">
                        <Text w="full" fontSize="xl" fontWeight="medium">
                          Pertemuan {keterangan.pertemuan}
                        </Text>
                        <Text fontSize="lg">{keterangan.date}</Text>
                      </Flex>
                      {keterangan.pertemuan && (
                        <Center
                          rounded="xl"
                          alignItems="center"
                          justifyContent="center"
                          h="48px"
                          w="120px"
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
                          <Text fontWeight="medium">
                            {keterangan.keterangan}
                          </Text>
                        </Center>
                      )}
                    </Flex>
                  </Box>
                ))}
              </Box>
              {/* <Box p='3' mt={2}>
                
                <Box>{absensi.description}</Box>
                <Box>Jumlah Hadir: {absensi.hadir}</Box>
                <Box>Jumlah Tidak Hadir: {absensi.tidakHadir}</Box>
                <Box>
                  {absensi.keterangan.map((keterangan) => (
                    <Box key={keterangan.pertemuan}>
                      Pertemuan {keterangan.pertemuan}: {keterangan.keterangan}
                    </Box>
                  ))}
                </Box>
              </Box> */}
            </motion.div>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default AbsensiComponent;
