import { ReactNode, useState } from "react";
import {
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Button,
  TableContainer,
  useBreakpointValue,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/react";
import {CgUnavailable} from "react-icons/cg";

interface User {
  namaOrangTua?: ReactNode;
  namaAnakWali?: ReactNode;
  noHandphone?: ReactNode;
  email?: ReactNode;
  id: number;
  nama: string;
  nrp: string;
  status: string;
}

interface Props {
  users: User[];
}

const DataTable = ({ users }: Props) => {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const isMobile = useBreakpointValue({ base: true, md: false });

  const openModal = (user: User) => {
    setSelectedUser(user);
  };

  const closeModal = () => {
    setSelectedUser(null);
  };

  const deleteUser = (userId: number) => {
    // Perform deletion logic here
    console.log(`Deleting user with ID: ${userId}`);
  };

  return (
    <>
      <TableContainer w="full">
        <Table variant="simple" size={isMobile ? "sm" : "md"}>
          <Thead>
            <Tr>
              <Th>Nomor</Th>
              <Th>Nama</Th>
              <Th>NRP</Th>
              <Th>Punya Akun Wali?</Th>
              <Th>Akun Wali</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users &&
              users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td maxW="30vw" overflowX="auto">
                    {user.nama}
                  </Td>
                  <Td>{user.nrp}</Td>
                  <Td>
                    <Box
                      rounded="lg"
                      py="2"
                      px="6"
                      fontWeight="500"
                      color={user.status === "Sudah" ? "green.500" : "red.500"}
                      w="max-content"
                      bgColor={
                        user.status === "Sudah" ? "green.100" : "red.100"
                      }
                    >
                      {user.status} Punya Akun Wali
                    </Box>
                  </Td>
                  <Td>
                    <Button
                      size={isMobile ? "sm" : "md"}
                      variant="link"
                      isDisabled={user.status === "Belum"}
                      colorScheme="dark"
                      onClick={() => openModal(user)}
                    >
                      Lihat Wali
                    </Button>
                  </Td>
                </Tr>
              ))}
          </Tbody>
        </Table>
      </TableContainer>

      {/* Modal */}
      <Modal isCentered isOpen={selectedUser !== null} onClose={closeModal} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informasi Wali</ModalHeader>
          <ModalCloseButton />
          {selectedUser && (
            <ModalBody>
              <Box mb={4}>
                <Text mb='1'>Nama Orang Tua</Text>{" "}
                <Box p='2' bgColor='gray.200' rounded='md' border='1px' color='gray.700' borderColor='gray.300' >{selectedUser.namaOrangTua}</Box>
              </Box>
              <Box mb={4}>
                <Text mb='1'>Nama Anak Wali</Text>{" "}
                <Box p='2' bgColor='gray.200' rounded='md' border='1px' color='gray.700' borderColor='gray.300' >{selectedUser.namaAnakWali}</Box>
              </Box>
              <Box mb={4}>
                <Text mb='1'>No Handphone</Text>{" "}
                <Box p='2' bgColor='gray.200' rounded='md' border='1px' color='gray.700' borderColor='gray.300' >{selectedUser.noHandphone}</Box>
              </Box>
              <Box mb={0}>
                <Text mb='1'>Email</Text>{" "}
                <Box p='2' bgColor='gray.200' rounded='md' border='1px' color='gray.700' borderColor='gray.300' >{selectedUser.email}</Box>
              </Box>
             
            </ModalBody>
          )}
          <ModalFooter>
            <Button
              colorScheme="red"
              rounded='lg'
              onClick={() => deleteUser(selectedUser?.id)}
              rightIcon={<CgUnavailable />}
              mb='2'
            >
              Nonaktifkan
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default DataTable;
