import { Box, Flex, Text } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import DataTable from "./components/dataAkunMhs";
import { SearchBar } from "components/navbar/searchBar/SearchBar";


export default function Presensi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;
  const users = [
    {
      id: 1,
      nama: "John Doe",
      nrp: "0511940000128",
      status: "Sudah Mendaftar",
    },
    {
      id: 2,
      nama: "John Doe",
      nrp: "0511940000128",
      status: "Sudah Mendaftar",
    },
    // Daftar pengguna lainnya...
  ];


  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base: "20px", md: "24px" }}>
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
                Kelola Akun Mahasiswa
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
              <Flex w="full" alignItems="center">
                <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                  Daftar Akun Mahasiswa
                </Text>
              
              </Flex>
              <SearchBar />
              <DataTable users={users} />   
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
