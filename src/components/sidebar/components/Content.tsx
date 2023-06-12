// chakra imports
import { Box, Flex, Stack } from "@chakra-ui/react";
//   Custom components
import Links from "components/sidebar/components/Links";
import { IRoute } from "types/navigation";
import {
  Avatar,
  Text,
  VStack,
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";


import { IoMdArrowDropdown } from "react-icons/io";
import { HiUser } from "react-icons/hi";
import { HiSwitchVertical } from "react-icons/hi";
import { IoLogOut } from "react-icons/io5";
import Link from "next/link";
import ChildModal from "pages/dashboard/beranda/components/ChildModal";
import { useState } from "react";

// FUNCTIONS

interface SidebarContentProps {
  routes: IRoute[];
}


const ProfileTab = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedChild, setSelectedChild] = useState(0);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleSelectChild = (index: number) => {
    setSelectedChild(index);
    closeModal();
  };

  const childrenData = [
    {
      name: "Arkan Aulia Farhan",
      src: "/img/avatars/avatar.png",
      role: "Mahasiswa"
    },
    {
      name: "John Doe",
      src: "/img/avatars/avatar6.png",
      role: "Mahasiswa"
    },
    // Add more children objects as needed
  ];

  return (
    <>
      <Menu>
        <MenuButton
          px="4"
          py="4"
          mx="2"
          w={{ base:'265px',md:"280px" }}
          rounded="xl"
          as={Flex}
          align="center"
          mb="2"
          _hover={{ cursor: "pointer", bg: "white" }}
          transition="background-color 0.2s ease-in-out"
          _active={{ bg: "white", opacity: 1 }}
        >
          <Flex alignItems="center">
            <Avatar
              size="md"
              name="avatar"
              src={childrenData[selectedChild]?.src}
            />
            <VStack ml="4" align="flex-start" spacing="0">
              <Text fontSize={{ base:'sm',md:"md" }} color="gray.500">
              {childrenData[selectedChild]?.role}
              </Text>
              <Text fontSize={{ base:'md',md:"xl" }} fontWeight="500" noOfLines={1}>
                {childrenData[selectedChild]?.name}
              </Text>
            </VStack>
            <Box ml="4">
              <Icon as={IoMdArrowDropdown} boxSize="6" />
            </Box>
          </Flex>
        </MenuButton>
        <MenuList w={{ base:'265px',md:"280px" }} p="2">
          <Link href="/dashboard/profil">
            <MenuItem
              fontSize={{ base:'md',md:"lg" }}
              icon={<Icon as={HiUser} boxSize="6" alignItems="center" />}
            >
              Profil Anak Wali
            </MenuItem>
          </Link>
          <MenuItem
            fontSize={{ base:'md',md:"lg" }}
            icon={
              <Icon as={HiSwitchVertical} boxSize="6" alignItems="center" />
            }
            onClick={openModal}
          >
            Ganti Anak Wali
          </MenuItem>
          <MenuItem
            fontSize={{ base:'md',md:"lg" }}
            icon={<Icon as={IoLogOut} boxSize="6" alignItems="center" />}
          >
            Keluar
          </MenuItem>
        </MenuList>
      </Menu>
      <ChildModal
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        childrenData={childrenData}
        handleSelectChild={handleSelectChild}
      />
    </>
  );
};


function SidebarContent(props: SidebarContentProps) {
  const { routes } = props;
  // SIDEBAR
  return (
    <Flex direction="column" height="100%" pt={{ base:'30px',md:"15px" }} borderRadius="30px">
      <ProfileTab />

      <Stack direction="column" mt="8px" mb="auto" ps="20px">
        <Box pe={{ lg: "16px", "2xl": "16px" }}>
          <Links routes={routes} />
        </Box>
      </Stack>
    </Flex>
  );
}

export default SidebarContent;
