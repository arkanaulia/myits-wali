import { Avatar, Box, Flex, Text, VStack, useBreakpointValue } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import Dropdown from "./components/Dropdown";
import LineGraph from "./components/Graph";
import Link from "next/link";

const ProfileTab = () => {
  const avatarSize = useBreakpointValue({ base: "md", md: "lg" });
  return (
    <Flex alignItems="center" w="full" direction={{ base:'column', md:'row' }} gap='16px' justifyContent={{ base:'',md:"space-between" }}>
      <Flex alignItems="center">
        <Avatar size={avatarSize} name="avatar" src="/img/avatars/avatar.png" />
        <VStack ml="8" align="flex-start" spacing="0">
          <Text fontSize={{ base:'lg',md:"2xl" }}  fontWeight="500">
            Arkan Aulia Farhan
          </Text>
          <Text fontSize={{ base:'lg',md:"xl" }} >05111940000128</Text>
          <Text fontSize={{ base:'lg',md:"xl" }}  color="gray.500">
            Teknik Informatika 2019
          </Text>
        </VStack>
      </Flex>
      

      
      <Flex
        alignItems="start"
        flexDirection="row"
        gap={{ base:'24px',md:"32px" }}
        px={{ base:'0',md:"6" }}
        py={{ base:'0',md:"4" }}
        boxShadow={{ base:'', md:"sm" }}
        border={{ base:'', md:"1px" }}
        borderColor={{ base:'biru.100',md:"biru.100" }}
        rounded="2xl"
        bg={{ base:'',md:"white" }}
      >
        <Box alignItems="center" flexDirection="column">
          <Text fontSize={{ base:'md',md:"xl" }} color="gray.500" fontWeight="normal">
            IPK
          </Text>
          <Text fontSize={{ base:'xl',md:"3xl" }} fontWeight="500">
            3.85
          </Text>
        </Box>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize={{ base:'md',md:"xl" }} color="gray.500" fontWeight="normal">
            SKS Lulus
          </Text>
          <Flex alignItems="end" gap="1">
            <Text fontSize={{ base:'xl',md:"3xl" }} fontWeight="500">
              120
            </Text>
            <Text mb='1' fontSize={{ base:'md',md:"xl" }} color="gray.500" fontWeight="500">
              /144
            </Text>
          </Flex>
        </Box>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize={{ base:'md',md:"xl" }} color="gray.500" noOfLines={1} fontWeight="normal">
            Status Mahasiswa
          </Text>
          <Text fontSize={{ base:'xl',md:"3xl" }} color="green.500" fontWeight="500">
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
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base:'20px',md:"24px" }}>
            <Flex alignItems="center" gap={{ base:'4',md:"6" }} w="full">
              <Box>
                <Image
                  src="/img/icons/studi.png"
                  h={{ base:'30px',md:"40px" }}
                  w={{ base:'30px',md:"40px" }}
                  alt="info"
                />
              </Box>

              <Text fontSize={{ base:'2xl',md:"3xl" }} fontWeight="600">
                Kemajuan Studi
              </Text>
            </Flex>
            <Card
              boxShadow="lg"
              p={{ base: "24px", md: "32px" }}
              alignItems="center"
              flexDirection="column"
              gap={{ base: "16px", md: "24px" }}
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
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
              p={{ base: "24px", md: "32px" }}
              alignItems="center"
              flexDirection="column"
              gap={{ base: "16px", md: "24px" }}
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Box w="100%" justifyContent="left">
                <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
                  Detail Nilai
                </Text>
              </Box>
              <Flex w="100%" direction="column" gap={{ base:'10px',md:"4px" }}>
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
              p={{ base: "24px", md: "32px" }}
              alignItems="center"
              flexDirection="column"
              gap={{ base: "16px", md: "24px" }}
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Box w="100%" justifyContent="left">
                <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
                  Lihat Juga
                </Text>
              </Box>

              <VStack spacing={{ base:'1',md:'3' }} align="left" w="full">
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
                        h={{ base:'30px',md:"40px" }}
                        w={{ base:'30px',md:"40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="500">
                        Ekstrakurikuler
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
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
                        h={{ base:'30px',md:"40px" }}
                        w={{ base:'30px',md:"40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="500">
                        Biaya Pendidikan
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
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
                        h={{ base:'30px',md:"40px" }}
                        w={{ base:'30px',md:"40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="500">
                        Presensi
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
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
