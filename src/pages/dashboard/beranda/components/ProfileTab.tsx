import {
  Avatar,
  Flex,
  Text,
  VStack,
  Button,
  Divider,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { HiSwitchVertical } from "react-icons/hi";

const childrenData = [
  {
    name: "Arkan Aulia Farhan",
    src: "/img/avatars/avatar.png",
    nrp: "05111940000128",
    studyProgram: "Teknik Informatika 2019",
    semester: "5",
  },
  {
    name: "John Doe",
    src: "/img/avatars/avatar6.png",
    nrp: "05111940000002",
    studyProgram: "Teknik Informatika 2018",
    semester: "7",
  },
  // Add more child data if needed
];

const ProfileTab = () => {
  const [selectedChild, setSelectedChild] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSelectChild = (index: number) => {
    setSelectedChild(index);
    setIsModalOpen(false);
  };

  const avatarSize = useBreakpointValue({ base: "lg", md: "2xl" });

  const renderChildData = () => {
    const child = childrenData[selectedChild];
    return (
      <Flex
        alignItems="center"
        w='full'
        gap={{ base: "6", md: "0" }}
        // direction={{ base: "column", md: "row" }}
        m={{ base:'0',md:"4" }}
      >
        <Avatar size={avatarSize} name={child.name} src={child.src} />
        <VStack
          ml={{ base: "0", md: "8" }}
          align='flex-start'
          spacing="0"
        >
          <Text fontSize={{ base:'lg',md:"2xl" }} fontWeight="500">
            {child.name}
          </Text>
          <Text fontSize={{ base:'md',md:"2xl" }}>NRP: {child.nrp}</Text>
          <Text fontSize={{ base:'md',md:"2xl" }} color="gray.500">
            {child.studyProgram}
          </Text>
          <Text fontSize={{ base:'md',md:"2xl" }} color="gray.500">
            Semester {child.semester}
          </Text>
        </VStack>
      </Flex>
    );
  };

  const renderChildModal = () => {
    const modalSize = useBreakpointValue({ base: "sm", md: "lg" });
    return (
      <Modal
        isCentered
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        size={modalSize}
      >
        <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
        <ModalOverlay />
        <Center>
          <ModalContent py="24px" px='10px'>
            <ModalHeader fontSize={{ base:'xl',md:'2xl' }}>Pilih Anak Wali</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <VStack spacing="4">
                {childrenData.map((child, index) => (
                  <Button
                    key={child.nrp}
                    variant="outline"
                    w="full"
                    size="lg"
                    rounded="lg"
                    fontWeight="500"
                    onClick={() => handleSelectChild(index)}
                  >
                    {child.name}
                  </Button>
                ))}
              </VStack>
            </ModalBody>
          </ModalContent>
        </Center>
      </Modal>
    );
  };

  return (
    <Flex
      alignItems="center"
      align='flex-start'
      direction={{ base: "column", md: "row" }}
      w="full"
      justifyContent="space-between"
      gap={{ base: "6", md: "0" }}
    >
      {renderChildData()}
      <Flex
        alignItems="center"
        w={{ base: "full", md: "max-content" }}
        m={{ base: "0", md: "4" }}
      >
        <Center height="130px" mx="10" display={{ base: "none", md: "block" }}>
          <Divider orientation="vertical" borderColor="gray.400" />
        </Center>

        <Flex
          direction="column"
          w={{ base: "full", md: "80" }}
          align={{ base: "center", md: "flex-start" }}
          gap="2"
        >
          <Text fontSize={{ base: "md", md: "lg" }} color="gray.500">
            Ingin lihat anak anda yang lain?
          </Text>
          <Button
            variant="outline"
            fontSize={{ base: "md", md: "lg" }}
            w="full"
            size="lg"
            rounded="lg"
            fontWeight="500"
            onClick={() => setIsModalOpen(true)}
            rightIcon={<HiSwitchVertical />}
          >
            Pilih Anak Wali
          </Button>
        </Flex>
      </Flex>
      {renderChildModal()}
    </Flex>
  );
};

export default ProfileTab;
