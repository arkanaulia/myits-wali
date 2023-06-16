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
  Flex,
  Box,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
import { CgUnavailable } from "react-icons/cg";

interface User {
  namaAnakWali?: ReactNode;
  noHandphone?: ReactNode;
  id: number;
  namaWali: string;
  email?: string;
  username?: string;
  password?: string;
  createdAt?: string;
  status?: string;
  jurusan?: string;
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
    <TableContainer w="full">
      <Table variant="simple" size={isMobile ? "sm" : "md"}>
        <Thead>
          <Tr>
            <Th>Nomor</Th>
            <Th>Nama Wali</Th>
            <Th>Email</Th>
            <Th>Username</Th>
            <Th>Tanggal Dibuat</Th>
            <Th>Akun Wali</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users &&
            users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.namaWali}</Td>
                <Flex
                  bgColor="biru.100"
                  color="biru.500"
                  rounded="lg"
                  w="full"
                  align="center"
                  display={user.status == null ? "none" : "block"}
                >
                  <Td fontWeight="500" w="max-content">
                    {" "}
                    {user.status}
                  </Td>
                </Flex>
                <Td>{user.email}</Td>
                <Td>{user.username}</Td>
                <Td>{user.createdAt}</Td>
                <Td>
                  <Button
                    display={user.password == null ? "none" : "block"}
                    size={isMobile ? "sm" : "md"}
                    variant="link"
                    colorScheme="dark"
                    onClick={() => openModal(user)}
                  >
                    Lihat Akun
                  </Button>
                  <Modal
                    isCentered
                    isOpen={selectedUser !== null}
                    onClose={closeModal}
                    size="xl"
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Informasi Wali</ModalHeader>
                      <ModalCloseButton />
                      {selectedUser && (
                        <ModalBody>
                          <Box mb={4}>
                            <Text mb="1">Nama Orang Tua</Text>{" "}
                            <Box
                              p="2"
                              bgColor="gray.100"
                              rounded="md"
                              border="1px"
                              color="gray.800"
                              fontWeight='500'
                              borderColor="gray.300"
                            >
                              {selectedUser.namaWali}
                            </Box>
                          </Box>
                          <Box mb={4}>
                            <Text mb="1">Nama Anak Wali</Text>{" "}
                            <Box
                              p="2"
                              bgColor="gray.100"
                              rounded="md"
                              border="1px"
                              color="gray.800"
                              fontWeight='500'
                              borderColor="gray.300"
                            >
                              {selectedUser.namaAnakWali}
                            </Box>
                          </Box>
                          <Box mb={4}>
                            <Text mb="1">Jurusan Anak Wali</Text>{" "}
                            <Box
                              p="2"
                              bgColor="gray.100"
                              rounded="md"
                              border="1px"
                              color="gray.800"
                              fontWeight='500'
                              borderColor="gray.300"
                            >
                              {selectedUser.jurusan}
                            </Box>
                          </Box>
                          <Box mb={4}>
                            <Text mb="1">No Handphone</Text>{" "}
                            <Box
                              p="2"
                              bgColor="gray.100"
                              rounded="md"
                              border="1px"
                              color="gray.800"
                              fontWeight='500'
                              borderColor="gray.300"
                            >
                              {selectedUser.noHandphone}
                            </Box>
                          </Box>
                          <Box mb={0}>
                            <Text mb="1">Email</Text>{" "}
                            <Box
                              p="2"
                              bgColor="gray.100"
                              rounded="md"
                              border="1px"
                              color="gray.800"
                              fontWeight='500'
                              borderColor="gray.300"
                            >
                              {selectedUser.email}
                            </Box>
                          </Box>
                        </ModalBody>
                      )}
                      <ModalFooter>
                        <Button
                          colorScheme="red"
                          rounded="lg"
                          onClick={() => deleteUser(selectedUser?.id)}
                          rightIcon={<CgUnavailable />}
                          mb="2"
                        >
                          Nonaktifkan
                        </Button>
                      </ModalFooter>
                    </ModalContent>
                  </Modal>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
