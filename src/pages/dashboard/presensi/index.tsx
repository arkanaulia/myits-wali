import { Box, Flex, Text, VStack, Heading } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import AbsensiComponent from "./components/AbsensiData";
import ProfileTab from "./components/Header";
import Link from "next/link";
export default function Presensi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;

  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base:'20px',md:"24px" }}>
            <Flex alignItems="center" gap="6" w="full">
              <Box>
                <Image
                  src="/img/icons/absen.png"
                  h={{ base: "30px", md: "40px" }}
                  w={{ base: "30px", md: "40px" }}
                  alt="info"
                />
              </Box>

              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="semibold">
                Presensi
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
              <AbsensiComponent />
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
                <Heading fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="semibold">
                  Lihat Juga
                </Heading>
              </Box>

              <VStack spacing={{ base:'1',md:'3' }} align="left" w="full">
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
                        h={{ base:'30px',md:"40px" }}
                        w={{ base:'30px',md:"40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="medium">
                        Kemajuan Studi
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
                        Klik disini untuk mengakses halaman Kemajuan Studi!
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
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="medium">
                        Biaya Pendidikan
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
                        Klik disini untuk mengakses halaman Biaya Pendidikan!
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
                        h={{ base:'30px',md:"40px" }}
                        w={{ base:'30px',md:"40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text fontSize={{ base:'xl',md:"2xl" }} fontWeight="medium">
                        Ekstrakurikuler
                      </Text>
                      <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal">
                        Klik disini untuk mengakses halaman Ekstrakurikuler!
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
