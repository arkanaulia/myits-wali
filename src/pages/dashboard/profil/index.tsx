import { Box, Flex, Text, VStack, } from "@chakra-ui/react";

import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import ProfileTab from "./components/Header";
import Link from "next/link";
import ProfilData from "./components/ProfilData";
import { IoMdArrowRoundBack } from "react-icons/io";

export default function Presensi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;

  const bio = [
    { title: "Tempat, Tanggal Lahir", value: "Kota Bekasi, 12 Mei 2001" },
    { title: "Jenis Kelamin", value: "Laki - laki" },
    { title: "Golongan Darah", value: "B+" },
    { title: "Agama", value: "Islam" },
    { title: "Status Nikah", value: "Tidak" },
    {
      title: "Alamat Surabaya",
      value:
        "jl kesehatan perumdos blok M no 3, keputih Sukolilo, Kota Surabaya",
    },
    { title: "Dosen Wali", value: "Kelly rosa sungkono" },
    { title: "Program Studi", value: "S-1 Teknik Informatika" },
  ];
  const akademik = [
    { title: "Jalur Terima", value: "SBMPTN" },
    { title: "Tanggal Masuk ITS", value: "1 Agustus 2019" },
    { title: "Asal Sekolah", value: "SMAN 81 Jakarta" },
  ];
  const ortu = [
    { title: "Nama Ayah", value: "Nama ayah" },
    { title: "Nama Ibu", value: "Nama Ibu" },
    { title: "Alamat", value: "1190248349" },
    { title: "Pekerjaan Ayah", value: "Pegawai" },
    { title: "Pekerjaan Ibu", value: "-" },
    { title: "Pendapatan", value: "Rp. 5.000.001 - Rp. 7.500.000" },
    { title: "No. Telepon", value: "0218207748" },
  ];

  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base: "20px", md: "24px" }}>
          <Link href="/dashboard/beranda">
            <Flex
              w="full"
              alignItems="center"
              gap="2"
              fontSize="xl"
              fontWeight="500"
              transition= "all 0.3s ease"
              cursor='pointer'
              _hover={{
                textDecoration: "underline",
              }}
              my='2'
            >
              <IoMdArrowRoundBack />
              Kembali
            </Flex>
            </Link>
            <Flex alignItems="center" gap="6" w="full">
              <Box>
                <Image
                  src="/img/icons/profil.png"
                  h={{ base: "30px", md: "40px" }}
                  w={{ base: "30px", md: "40px" }}
                  alt="info"
                />
              </Box>

              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
                Profil
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
              <Box w="100%" justifyContent="left">
                <Text
                  fontSize={{ sm: "2xl", md: "3xl" }}
                  fontWeight="500"
                >
                  Biodata
                </Text>
              </Box>
              <ProfilData data={bio} />
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
              <ProfilData data={akademik} />
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
                  Orang Tua / Wali
                </Text>
              </Box>
              <ProfilData data={ortu} />
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
                p={{ sm: "0", md: "2" }}
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
                  Lihat Juga
                </Text>
              </Box>

              <VStack spacing={{ base: "1", md: "3" }} align="left" w="full">
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
                        h={{ base: "30px", md: "40px" }}
                        w={{ base: "30px", md: "40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="500"
                      >
                        Kemajuan Studi
                      </Text>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="normal"
                      >
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
                        h={{ base: "30px", md: "40px" }}
                        w={{ base: "30px", md: "40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="500"
                      >
                        Ekstrakurikuler
                      </Text>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="normal"
                      >
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
                        h={{ base: "30px", md: "40px" }}
                        w={{ base: "30px", md: "40px" }}
                        alt="info"
                      />
                    </Box>
                    <Box>
                      <Text
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="500"
                      >
                        Presensi
                      </Text>
                      <Text
                        fontSize={{ base: "md", md: "lg" }}
                        fontWeight="normal"
                      >
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
