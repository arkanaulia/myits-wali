import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  VStack,
} from "@chakra-ui/react";

interface ChildModalProps {
  childrenData?: {
    name?: string;
    src?: string;
    nrp?: string;
    studyProgram?: string;
    semester?: string;
  }[];
  handleSelectChild: (index: number) => void;
  isModalOpen: boolean;
  closeModal: () => void;
}

const ChildModal = ({
  childrenData,
  handleSelectChild,
  isModalOpen,
  closeModal,
}: ChildModalProps) => {
  return (
    <Modal isCentered isOpen={isModalOpen} onClose={closeModal} size="md">
      <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(5px)" />
      <ModalOverlay />
      <ModalContent py="20px">
        <ModalHeader fontSize='2xl'>Pilih Anak Wali</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <VStack spacing="4">
            {childrenData &&
              childrenData.map((child, index) => (
                <Button
                  key={child?.nrp}
                  variant="outline"
                  w="full"
                  size="lg"
                  rounded="lg"
                  fontWeight="500"
                  onClick={() => handleSelectChild(index)}
                >
                  {child?.name}
                </Button>
              ))}
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default ChildModal;
