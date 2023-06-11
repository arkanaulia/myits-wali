import {
   Avatar,
   Flex,
   Text,
   VStack,
   Button,
   Divider,
   Center,
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
 
   const renderChildData = () => {
     const child = childrenData[selectedChild];
     return (
       <Flex alignItems="center" m="4">
         <Avatar size="2xl" name={child.name} src={child.src} />
         <VStack ml="8" align="flex-start" spacing="0">
           <Text fontSize="2xl" fontWeight="medium">
             {child.name}
           </Text>
           <Text fontSize="xl">NRP: {child.nrp}</Text>
           <Text fontSize="xl" color="gray.500">
             {child.studyProgram}
           </Text>
           <Text fontSize="xl" color="gray.500">
             Semester {child.semester}
           </Text>
         </VStack>
       </Flex>
     );
   };
 
   const renderChildModal = () => {
     return (
       <Modal
         isCentered
         isOpen={isModalOpen}
         onClose={() => setIsModalOpen(false)}
         size="lg"
       >
         <ModalOverlay
           bg="blackAlpha.300"
           backdropFilter="blur(5px)"
         />
         <ModalOverlay />
         <Center>
           <ModalContent p="24px">
             <ModalHeader>Pilih Anak Wali</ModalHeader>
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
                     fontWeight="medium"
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
     <Flex alignItems="center" w="full" justifyContent="space-between">
       {renderChildData()}
       <Flex alignItems="center" m="4">
         <Center height="130px" mx="10">
           <Divider orientation="vertical" borderColor="gray.400" />
         </Center>
         <Flex direction="column" w="80" gap="2">
           <Text fontSize="lg" color="gray.500">
             Apakah Anak Anda Lebih Dari 1?
           </Text>
           <Button
             variant="outline"
             w="full"
             size="lg"
             rounded="lg"
             fontWeight="medium"
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