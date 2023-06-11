import { Avatar, Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import EkskulList from "./components/EkskulList";
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
      <Flex alignItems="center" flexDirection="row" gap="32px" px='6' py='4' boxShadow='sm' border='1px' borderColor='biru.100' rounded='2xl' bg='white'>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize="xl" color="gray.500" fontWeight="normal">
            Nilai Skem
          </Text>
          <Text fontSize="3xl" fontWeight="medium">
            3.85
          </Text>
        </Box>
        <Box alignItems="center" flexDirection="column">
          <Text fontSize="xl" color="gray.500" fontWeight="normal">
            Kredit Skem
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
            Status Kelulusan
          </Text>
          <Text fontSize="3xl" color="green.500" fontWeight="medium">
            Lulus
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

const data1 = [
  {
    id: 1,
    nama: "Basic Media Schooling FTEIC 2023",
    desc: "Bem FTEIC",
    jenis: "Pelatihan",
    waktu: "01 Feb 2021 - 31 Mar 2021",
    icon: "kegiatan",
  },
];
const data2 = [
  {
    id: 1,
    nama: "PKM 2023",
    desc: "Juara 1",
    jenis: "Kompetisi",
    waktu: "01 Feb 2021 - 31 Mar 2021",
    icon: "medali",
  },
  {
    id: 2,
    nama: "PKM 2022",
    desc: "Juara 1",
    jenis: "Kompetisi",
    waktu: "01 Feb 2021 - 31 Mar 2021",
    icon: "medali",
  },
];

export default function Ekskul(props: { [x: string]: any }) {
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
                  src="/img/icons/ekskul.png"
                  h="40px"
                  w="40px"
                  alt="info"
                />
              </Box>

              <Text fontSize="3xl" fontWeight="semibold">
                Ekstrakurikuler
              </Text>
            </Flex>

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
              <ProfileTab />
            </Card>

            <Card
              boxShadow="lg"
              p="32px"
              alignItems="center"
              flexDirection="column"
              gap="10px"
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
                  Pelatihan
                </Heading>
              </Box>

              <EkskulList data={data1} />
            </Card>

            <Card
              boxShadow="lg"
              p="32px"
              alignItems="center"
              flexDirection="column"
              gap="10px"
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
                  Kompetisi
                </Heading>
              </Box>

              <EkskulList data={data2} />
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

              <VStack spacing={3  } align="left" w="full">

              <Link href="/dashboard/studi">
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
                      src="/img/icons/studi.png"
                      h="40px"
                      w="40px"
                      alt="info"
                    />
                  </Box>
                  <Box>
                    <Text fontSize="2xl" fontWeight="medium">
                      Kemajuan Studi
                    </Text>
                    <Text fontSize="lg" fontWeight="normal">
                      Klik disini untuk mengakses halaman Kemajuan Studi!
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
              </VStack>
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
