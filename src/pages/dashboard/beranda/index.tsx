import { Box, Flex, Text, Button } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import Banner from "views/admin/marketplace/components/Banner";
import ProfileTab from "./components/ProfileTab";
import AkademikTab from "./components/AkademikTab";
import EkskulTab from "./components/EkskulTab";
import Link from "next/link";
import { MdArrowForwardIos } from "react-icons/md";

export default function Beranda(props: { [x: string]: unknown }) {
  // Chakra Color Mode
  const { ...rest } = props;

  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base:'20px',md:"24px" }}>
            <Banner />
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
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Anak Wali
                </Text>
              </Box>
              <ProfileTab />
              <Link href="/dashboard/profil">
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                >
                  Lihat Profil Anak
                </Button>
              </Link>
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
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Akademik
                </Text>
              </Box>
              <AkademikTab />
              <Link href="/dashboard/studi">
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                >
                  Lihat Kemajuan Studi
                </Button>
              </Link>
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
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Ekstrakulikuler
                </Text>
              </Box>
              <EkskulTab />
              <Link href="/dashboard/ekstrakurikuler">
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                >
                  Lihat Ekstrakulikuler Lainnya
                </Button>
              </Link>
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
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Biaya Pendidikan
                </Text>
              </Box>

              <Flex
                justifyContent={{ base: "left", md: "space-between" }}
                
                direction={{ base: "column", md: "row" }}
                gap='3'
                w="full"
              >
                <Flex direction="column" alignItems="start">
                  <Text fontSize={{ base:'lg',md:"xl" }} color="gray.500" fontWeight="normal">
                    Tagihan UKT
                  </Text>
                  <Text fontSize={{ base:'xl',md:"3xl" }} color="red.600" fontWeight="500">
                    Rp. 7.500.000,00
                  </Text>
                </Flex>
                <Flex
                  direction="column"
                  alignItems={{ base: "start", md: "end" }}
                >
                  <Text fontSize={{ base:'lg',md:"xl" }} color="gray.500" fontWeight="normal">
                    Batas Waktu Pembayaran
                  </Text>
                  <Text fontSize={{ base:'xl',md:"3xl" }} fontWeight="500">
                    25 Desember 2023
                  </Text>
                </Flex>
              </Flex>
              <Link href="/dashboard/biaya">
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                >
                  Lihat Ekstrakulikuler Lainnya
                </Button>
              </Link>
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
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Ada Kesulitan?
                </Text>
              </Box>

              <Flex
                alignItems="center"
                gap="6"
                w="full"
                p={{ sm:'0',md:"2" }}
                rounded="lg"
                transition="all 0.2s ease-in-out"
                _hover={{ bg: "biru.100" }}
              >
                <Box>
                  <Image
                    src="/img/icons/info.png"
                    h="40px"
                    w="40px"
                    alt="info"
                  />
                </Box>
                <Box>
                  <Text fontSize={{ sm: "xl", md: "2xl" }} fontWeight="500">
                    Hubungi Service Desk
                  </Text>
                  <Text fontSize={{ sm: "md", md: "lg" }} fontWeight="normal">
                    Klik disini untuk bertanya terkait aplikasi myITS Wali
                  </Text>
                </Box>
              </Flex>
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
