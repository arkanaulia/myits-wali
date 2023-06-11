import { Avatar, Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import Dropdown from "./components/Dropdown";
import LineGraph from "./components/Graph";
import Link from "next/link";

const ProfileTab = () => {
  return (
    <Flex alignItems="center" w="full" justifyContent="space-between">
      <Flex alignItems="center">
        <Avatar size="lg" name="avatar" src="/img/avatars/avatar.png" />
        <VStack ml="8" align="flex-start" spacing="0">
          <Text fontSize="2xl" fontWeight="medium">
            Arkan Aulia Farhan
          </Text>
          <Text fontSize="xl">05111940000128</Text>
          <Text fontSize="xl" color="gray.500">
            Teknik Informatika 2019
          </Text>
        </VStack>
      </Flex>
      <Flex
        alignItems="center"
        flexDirection="row"
        gap="32px"
        px="6"
        py="4"
        boxShadow="sm"
        border="1px"
        borderColor="biru.100"
        rounded="2xl"
        bg="white"
      >
        <Box alignItems="center" flexDirection="column">
          <Text fontSize="xl" color="gray.500" fontWeight="normal">
            IPK
          </Text>
          <Text fontSize="3xl" fontWeight="medium">
            3.85
          </Text>
        </Box>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize="xl" color="gray.500" fontWeight="normal">
            SKS Lulus
          </Text>
          <Flex alignItems="end" gap="1">
            <Text fontSize="3xl" fontWeight="medium">
              120
            </Text>
            <Text fontSize="xl" color="gray.500" fontWeight="medium">
              /144
            </Text>
          </Flex>
        </Box>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize="xl" color="gray.500" fontWeight="normal">
            Status Mahasiswa
          </Text>
          <Text fontSize="3xl" color="green.500" fontWeight="medium">
            Aktif
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

const data1 = [
  {
    semester: "Semester 5",
    sks: "18 sks",
  },
  {
    id: 1,
    name: "Perancangan Perangkat Lunak",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 2,
    name: "Grafika Komputer",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 3,
    name: "Kecerdasan Komputasional",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
];
const data2 = [
  {
    semester: "Semester 4",
    sks: "18 sks",
  },
  {
    id: 1,
    name: "Perancangan Perangkat Lunak",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 2,
    name: "Grafika Komputer",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 3,
    name: "Kecerdasan Komputasional",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
];
const data3 = [
  {
    semester: "Semester 3",
    sks: "18 sks",
  },
  {
    id: 1,
    name: "Perancangan Perangkat Lunak",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 2,
    name: "Grafika Komputer",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 3,
    name: "Kecerdasan Komputasional",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
];
const data4 = [
  {
    semester: "Semester 2",
    sks: "18 sks",
  },
  {
    id: 1,
    name: "Perancangan Perangkat Lunak",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 2,
    name: "Grafika Komputer",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 3,
    name: "Kecerdasan Komputasional",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
];
const data5 = [
  {
    semester: "Semester 1",
    sks: "18 sks",
  },
  {
    id: 1,
    name: "Perancangan Perangkat Lunak",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 2,
    name: "Grafika Komputer",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
  {
    id: 3,
    name: "Kecerdasan Komputasional",
    description: "IF4501 - 3 sks",
    nilai: "Nilai: A",
  },
];

export default function studi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap="24px">
            <Flex alignItems="center" gap="6" w="full">
              <Box>
                <Image
                  src="/img/icons/studi.png"
                  h="40px"
                  w="40px"
                  alt="info"
                />
              </Box>

              <Text fontSize="3xl" fontWeight="semibold">
                Kemajuan Studi
              </Text>
            </Flex>
            <Card
              boxShadow="lg"
              p="32px"
              alignItems="center"
              flexDirection="column"
              gap="24px"
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="no-repeat"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <ProfileTab />
              <Box w="100%">
                <LineGraph />
              </Box>
            </Card>

            <Card
              boxShadow="lg"
              p="32px"
              alignItems="center"
              flexDirection="column"
              gap="24px"
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Box w="100%" justifyContent="left">
                <Heading fontSize="3xl" fontWeight="semibold">
                  Detail Nilai
                </Heading>
              </Box>
              <Flex w="100%" direction="column" gap="4px">
                <Dropdown data={data1} />
                {/* <Divider orientation="horizontal" w='full' borderColor='gray.400' /> */}
                <Dropdown data={data2} />
                <Dropdown data={data3} />
                <Dropdown data={data4} />
                <Dropdown data={data5} />
              </Flex>
            </Card>

            <Card
              boxShadow="lg"
              p="32px"
              alignItems="center"
              flexDirection="column"
              gap="24px"
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Box w="100%" justifyContent="left">
                <Heading fontSize="3xl" fontWeight="semibold">
                  Lihat Juga
                </Heading>
              </Box>

              <VStack spacing={3} align="left" w="full">
                <Link href="/dashboard/ekstrakurikuler">
                  <Flex
                    alignItems="center"
                    gap="6"
                    w="full"
                    p="2"
                    rounded="lg"
                    transition="all 0.2s ease-in-out"
                    _hover={{ bg: "biru.100" }}
                    cursor="pointer"
                  >
                    <Box>
                      <Image
                        src="/img/icons/ekskul.png"
                        h="40px"
                        w="40px"
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="medium">
                        Ekstrakurikuler
                      </Text>
                      <Text fontSize="lg" fontWeight="normal">
                        Klik disini untuk mengakses halaman Ekstrakurikuler!
                      </Text>
                    </Box>
                  </Flex>
                </Link>

                <Link href="/dashboard/biaya">
                  <Flex
                    alignItems="center"
                    gap="6"
                    w="full"
                    p="2"
                    rounded="lg"
                    transition="all 0.2s ease-in-out"
                    _hover={{ bg: "biru.100" }}
                    cursor="pointer"
                  >
                    <Box>
                      <Image
                        src="/img/icons/biaya.png"
                        h="40px"
                        w="40px"
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="medium">
                        Biaya Pendidikan
                      </Text>
                      <Text fontSize="lg" fontWeight="normal">
                        Klik disini untuk mengakses halaman Biaya Pendidikan!
                      </Text>
                    </Box>
                  </Flex>
                </Link>

                <Link href="/dashboard/presensi">
                  <Flex
                    alignItems="center"
                    gap="6"
                    w="full"
                    p="2"
                    rounded="lg"
                    transition="all 0.2s ease-in-out"
                    _hover={{ bg: "biru.100" }}
                    cursor="pointer"
                  >
                    <Box>
                      <Image
                        src="/img/icons/absen.png"
                        h="40px"
                        w="40px"
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="medium">
                        Presensi
                      </Text>
                      <Text fontSize="lg" fontWeight="normal">
                        Klik disini untuk mengakses halaman Presensi!
                      </Text>
                    </Box>
                  </Flex>
                </Link>
              </VStack>
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
