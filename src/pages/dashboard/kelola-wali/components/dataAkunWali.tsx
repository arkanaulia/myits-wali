import { useState } from "react";
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
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { MdArrowForwardIos } from "react-icons/md";
import React from "react";

interface User {
  id: number;
  namaWali: string;
  email?: string;
  username?: string;
  password?: string;
  createdAt?: string;
  status?: string;
}

interface Props {
  users: User[];
}

const DataTable = ({ users }: Props) => {
  const [visiblePasswordId, setVisiblePasswordId] = useState<number | null>(
    null
  );
  const isMobile = useBreakpointValue({ base: true, md: false });

  const togglePasswordVisibility = (id: number) => {
    if (visiblePasswordId === id) {
      setVisiblePasswordId(null);
    } else {
      setVisiblePasswordId(id);
    }
  };

  const [showModalPass, setShowModalPass] = React.useState(false);
  const closeModalPass = () => {
    setShowModalPass(false);
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
            <Th>Password</Th>
            <Th>Tanggal Dibuat</Th>
            <Th>Reset Password</Th>
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
                <Td>
                  <Button
                    display={user.password == null ? "none" : "block"}
                    variant="link"
                    size={isMobile ? "sm" : "md"}
                    colorScheme="dark"
                    rightIcon={
                      visiblePasswordId === user.id ? <FiEyeOff /> : <FiEye />
                    }
                    onClick={() => togglePasswordVisibility(user.id)}
                  >
                    {visiblePasswordId === user.id ? user.password : "******"}
                  </Button>
                </Td>
                <Td>{user.createdAt}</Td>
                <Td>
                  <Button
                    display={user.password == null ? "none" : "block"}
                    size={isMobile ? "sm" : "md"}
                    variant="link"
                    colorScheme="dark"
                    onClick={() => setShowModalPass(true)}
                  >
                    Reset Password
                  </Button>
                  <Modal
                    isOpen={showModalPass}
                    onClose={closeModalPass}
                    size="xl"
                    isCentered
                  >
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Lupa Password</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <Text fontSize="md" mb="1">
                          Masukkan Email Terdaftar
                        </Text>
                        <Input placeholder="Masukkan email" />
                        <Button
                          fontSize={{ base: "md", md: "lg" }}
                          rightIcon={<MdArrowForwardIos />}
                          colorScheme="blue"
                          fontWeight="500"
                          variant="its"
                          w="full"
                          size="lg"
                          rounded="lg"
                          my="6"
                          onClick={closeModalPass}
                        >
                          Reset Password
                        </Button>
                      </ModalBody>
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
