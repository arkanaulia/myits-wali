import { Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import ProfileTab from "./components/Header";
import Link from "next/link";
export default function Presensi(props: { [x: string]: any }) {
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
                  src="/img/icons/absen.png"
                  h="40px"
                  w="40px"
                  alt="info"
                />
              </Box>

              <Text fontSize="3xl" fontWeight="semibold">
                Biaya Pendidikan
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
                  Detail Biaya
                </Heading>
              </Box>
              <Flex justifyContent="space-between" alignItems="center" w="full">
                <Flex alignItems="center" gap="6">
                  <Box>
                    <Text fontSize="xl" color="gray.500" fontWeight="normal">
                      Tagihan UKT
                    </Text>
                    <Text fontSize="3xl" color="red.600" fontWeight="medium">
                      Rp. 7.500.000,00
                    </Text>
                  </Box>
                </Flex>
                <Flex direction="column" alignItems="end">
                  <Text fontSize="xl" color="gray.500" fontWeight="normal">
                    Batas Waktu Pembayaran
                  </Text>
                  <Text fontSize="3xl" fontWeight="medium">
                    25 Desember 2023
                  </Text>
                </Flex>
              </Flex>
              <Flex justifyContent="space-between" alignItems="center" w="full">
                <Flex alignItems="center" gap="6">
                  <Box>
                    <Text fontSize="xl" color="gray.500" fontWeight="normal">
                      Tagihan Ikoma
                    </Text>
                    <Text fontSize="3xl" color="green.500" fontWeight="medium">
                      Lunas
                    </Text>
                  </Box>
                </Flex>
                <Flex direction="column" alignItems="end">
                  <Text fontSize="xl" color="gray.500" fontWeight="normal">
                    Batas Waktu Pembayaran
                  </Text>
                  <Text fontSize="3xl" fontWeight="medium">
                    -
                  </Text>
                </Flex>
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
                  Ada Pertanyaan?
                </Heading>
              </Box>

              <Flex alignItems="center" gap="6" w="full" p='2' rounded='lg' transition="all 0.2s ease-in-out" _hover={{ bg: "biru.100" }}>
                <Box>
                  <Image
                    src="/img/icons/info.png"
                    h="40px"
                    w="40px"
                    alt="info"
                  />
                </Box>
                <Box>
                  <Text fontSize="2xl" fontWeight="medium">
                    Hubungi Service Desk
                  </Text>
                  <Text fontSize="lg" fontWeight="normal">
                    Klik disini untuk bertanya terkait pembayaran biaya pendidikan
                  </Text>
                </Box>
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
