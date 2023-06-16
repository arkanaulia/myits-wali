/* react/jsx-key */
import React, { useState, useEffect } from "react";
import { Box, Select, Flex, Text, Divider } from "@chakra-ui/react";

// Data dummy untuk daftar presensi
const biayaData = [
  {
    id: 1,
    tagihan: "Tagihan UKT",
    value: "Rp.7.500.000,00",
    status: "Belum Lunas",
    description: "25 Desember 2023",
    semester: "semester1",
    keterangan: "Batas Waktu Pembayaran"
  },
  {
    id: 2,
    tagihan: "Tagihan IKOMA",
    value: "Rp.500.000,00",
    status: "Lunas",
    description: "20 Desember 2023",
    semester: "semester1",
    keterangan: "Tanggal Pelunasan"
  },
  {
    id: 3,
    tagihan: "Tagihan UKT",
    value: "Rp.7.500.000,00",
    status: "Belum Lunas",
    description: "25 Desember 2023",
    semester: "semester2",
    keterangan: "Batas Waktu Pembayaran"
  },
  // ...
];

type Biaya = {
  id: number;
  tagihan: string;
  value: string;
  status: string;
  description: string;
  semester: string;
  keterangan: string;
};

const PresensiComponent = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("");

  useEffect(() => {
    // Cek apakah ada semester yang tersedia dalam data presensi
    if (biayaData.length > 0) {
      setSelectedSemester(biayaData[0].semester); // Set nilai default sebagai semester pertama
    }
  }, []);

  const handleChangeSemester = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedSemester(event.target.value);
  };

  const filteredBiayaData: Biaya[] = biayaData.filter(
    (biaya) => biaya.semester === selectedSemester
  );

  return (
    <Box w="100%">
      <Flex mb="6" alignItems="center" justify="space-between">
        <Text
          fontSize={{ base: "2xl", md: "3xl" }}
          w={{ base: "30", md: "max-content" }}
          fontWeight="500"
        >
          Biaya Pendidikan
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

        {filteredBiayaData.map((biaya) => (
          <Box
            key={biaya.id}
            borderRadius="xl"
            transition="all 0.3s ease-in-out"
            borderColor="gray.200"
            w="full"
          >
            <Flex
              justifyContent="space-between"
              gap={{ base: "2", md: "" }}
              direction={{ base: "column", md: "row" }}
              alignItems={{ base: "left", md: "center" }}
              w="full"
              mt='4'
            >
              <Flex alignItems="center" gap="6">
                <Box>
                  <Text
                    fontSize={{ base: "lg", md: "xl" }}
                    color="gray.500"
                    fontWeight="normal"
                  >
                    {biaya.tagihan}
                  </Text>
                  <Text
                    fontSize={{ base: "2xl", md: "3xl" }}
                    
                    fontWeight="500"
                  >
                   {biaya.value}
                  </Text>
                </Box>
              </Flex>
              <Flex direction="column" alignItems={{ md: "end" }}>
                <Text
                  fontSize={{ base: "lg", md: "xl" }}
                  color="gray.500"
                  fontWeight="normal"
                >
                  {biaya.keterangan}
                </Text>
                <Text fontSize={{ base: "2xl", md: "3xl" }} color={biaya.status == 'Lunas' ? "green.500" : "red.500"} fontWeight="500">
                {biaya.description}
                </Text>
              </Flex>

              <Divider
                display={{ base: "block", md: "none" }}
                my="2"
                borderColor="gray.400"
              />

            </Flex>
          </Box>
        ))}
    </Box>
  );
};

export default PresensiComponent;