import { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  useBreakpointValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
} from "@chakra-ui/react";
import { IoMdAdd } from "react-icons/io";
import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import DataTable from "./components/dataAkunWali";
import { SearchBar } from "components/navbar/searchBar/SearchBar";


export default function Presensi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;
  const isMobile = useBreakpointValue({ base: true, md: false });
  const buttonSize = useBreakpointValue({ base: "md", md: "lg" });
  const users = [
    {
      id: 1,
      namaWali: "John Doe",
      email: "john.doe@example.com",
      username: "johndoe",
      password: "s3cr3tpass",
      createdAt: "2023-06-01",
    },
    {
      id: 2,
      namaWali: "John Doe",
      status: "PIC Beasiswa",
    },
    // Daftar pengguna lainnya...
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logic untuk menghandle submit form
    closeModal();
  };

  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base: "20px", md: "24px" }}>
            <Flex alignItems="center" gap="6" w="full">
              <Box>
                <Image
                  src="/img/icons/kelolawali.png"
                  h={{ base: "30px", md: "40px" }}
                  w={{ base: "30px", md: "40px" }}
                  alt="info"
                />
              </Box>

              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
                Kelola Akun Wali
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
              <Flex w="full" justify="space-between" alignItems="center">
                <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                  Daftar Akun Wali
                </Text>
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  size={buttonSize}
                  rounded="lg"
                  leftIcon={<IoMdAdd />}
                  onClick={openModal}
                >
                  Tambah Akun
                </Button>
              </Flex>
              <SearchBar />
              <DataTable users={users} />

              <Modal isCentered isOpen={isModalOpen} size={isMobile ? "sm" : "2xl"} onClose={closeModal}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader fontSize='2xl'>Tambah Akun Wali</ModalHeader>
                  <ModalCloseButton />
                  <form onSubmit={handleSubmit}>
                    <ModalBody >
                      <FormControl mb='4'>
                        <FormLabel>Nama Orang Tua</FormLabel>
                        <Input type="text" />
                      </FormControl>
                      <FormControl mb='4'>
                        <FormLabel>Nomor Handphone</FormLabel>
                        <Input type="tel" />
                      </FormControl>
                      <FormControl mb='4'>
                        <FormLabel>Email</FormLabel>
                        <Input type="email" />
                      </FormControl>
                      <FormControl mb='4'>
                        <FormLabel>Password</FormLabel>
                        <Input type="password" />
                      </FormControl>
                      <FormControl mb='4'>
                        <FormLabel>Konfirmasi Password</FormLabel>
                        <Input type="password" />
                      </FormControl>
                    </ModalBody>
                    <ModalFooter>
                      <Button onClick={closeModal} mr={4}>
                        Batal
                      </Button>
                      <Button variant='its' rounded='md' type="submit">
                        Buat Akun
                      </Button>
                    </ModalFooter>
                  </form>
                </ModalContent>
              </Modal>
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
