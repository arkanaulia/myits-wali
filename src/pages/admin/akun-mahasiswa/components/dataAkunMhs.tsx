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
} from "@chakra-ui/react";

interface User {
  id: number;
  nama: string;
  nrp: string;
  status: string;
}

interface Props {
  users: User[];
}

const DataTable = ({ users }: Props) => {
 
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <TableContainer w="full">
      <Table variant="simple" size={isMobile ? "sm" : "md"}>
        <Thead>
          <Tr>
            <Th>Nomor</Th>
            <Th>Nama</Th>
            <Th>NRP</Th>
            <Th>Status Wali</Th>
            <Th>Akun Wali</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users &&
            users.map((user) => (
              <Tr key={user.id}>
                <Td>{user.id}</Td>
                <Td>{user.nama}</Td>
               
                <Td>{user.nrp}</Td>
                <Td>{user.status}</Td>
            
                <Td>
                  <a href={`/reset-password/${user.id}`}>
                    <Button
                      size={isMobile ? "sm" : "md"}
                      variant="link"
                      colorScheme="dark"
                    >
                      Lihat Wali
                    </Button>
                  </a>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
