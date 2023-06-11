import { Box, Flex, Text, Button, Heading } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import Banner from "views/admin/marketplace/components/Banner";
import ProfileTab from "./components/ProfileTab";
import AkademikTab from "./components/AkademikTab";
import EkskulTab from "./components/EkskulTab";
import Link from "next/link";
import {MdArrowForwardIos} from 'react-icons/md'

export default function Beranda(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;

  return (
    <AdminLayout>
      <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap="24px">
            <Banner />
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
                  Anak Wali
                </Heading>
              </Box>
              <ProfileTab />
              <Link href="/dashboard/profil">
                <Button
                rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="medium"
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
                  Akademik
                </Heading>
              </Box>
              <AkademikTab />
              <Link href="/dashboard/studi">
                <Button
                rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="medium"
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
                  Ekstrakulikuler
                </Heading>
              </Box>
              <EkskulTab />
              <Link href="/dashboard/ekstrakurikuler">
                <Button
                rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="medium"
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
                  Biaya Pendidikan
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
              <Link href="/dashboard/biaya">
                <Button
                rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="medium"
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
                  Ada Kesulitan?
                </Heading>
              </Box>

              <Flex
                alignItems="center"
                gap="6"
                w="full"
                p="2"
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
                  <Text fontSize="2xl" fontWeight="medium">
                    Hubungi Service Desk
                  </Text>
                  <Text fontSize="lg" fontWeight="normal">
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
