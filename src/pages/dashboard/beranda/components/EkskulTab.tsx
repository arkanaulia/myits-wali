import {
   Box,
   Flex,
   Text,

 } from "@chakra-ui/react";
 
 import { Image } from "components/image/Image";

 const EkskulTab = () => {
   // Academic Data
   const ipkSkem = 3.85;
   const kreditSkem = 120;
   const totalSkem = 144;
   const statusLulus = 'Aktif';
 
   // Kegiatan Data
   const kegiatanData = [
     {
       title: 'Liga PKM ITS 2021',
       position: 'Juara 1',
       duration: '01 Feb 2021 - 31 Mar 2021',
       jenis: 'Kompetisi',
     },
     {
       title: 'Liga PKM ITS 2021',
       position: 'Juara 1',
       duration: '01 Feb 2021 - 31 Mar 2021',
       jenis: 'Kompetisi',
     },
   ];
 
   return (
     <Flex alignItems="center" w="full" flexDirection="column" gap="24px">
       {/* Academic Data */}
       <Flex alignItems="center" w="full" flexDirection="row" gap="32px">
         <Box alignItems="center" flexDirection="column">
           <Text fontSize="xl" color="gray.500" fontWeight="normal">
             Nilai Skem
           </Text>
           <Text fontSize="3xl" fontWeight="medium">
             {ipkSkem}
           </Text>
         </Box>
         <Box alignItems="center" flexDirection="column">
           <Text fontSize="xl" color="gray.500" fontWeight="normal">
             SKS Tempuh
           </Text>
           <Flex alignItems="end" gap="1">
             <Text fontSize="3xl" fontWeight="medium">
               {kreditSkem}
             </Text>
             <Text fontSize="xl" color="gray.500" fontWeight="medium">
               /{totalSkem}
             </Text>
           </Flex>
         </Box>
         <Box alignItems="center" flexDirection="column">
           <Text fontSize="xl" color="gray.500" fontWeight="normal">
             Status Mahasiswa
           </Text>
           <Text fontSize="3xl" color="green.500" fontWeight="medium">
             {statusLulus}
           </Text>
         </Box>
       </Flex>
 
       {/* Kegiatan Data */}
       <Flex w="full" flexDirection="column" gap="2">
         <Text fontSize="xl" fontWeight="normal" color="gray.500">
           Kegiatan
         </Text>
 
         {kegiatanData.map((kegiatan, index) => (
           <Flex
             key={index}
             justifyContent="space-between"
             alignItems="center"
             w="full"
             mb="1"
           >
             <Flex alignItems="center" gap="4">
               <Box>
                 <Image
                   src="/img/icons/medali.png"
                   h="40px"
                   w="40px"
                   alt="medali"
                 />
               </Box>
               <Box>
                 <Text fontSize="2xl" fontWeight="medium">
                   {kegiatan.title}
                 </Text>
                 <Text fontSize="xl" fontWeight="normal">
                   {kegiatan.position}
                 </Text>
               </Box>
             </Flex>
             <Flex direction="column" alignItems="end">
               <Text fontSize="xl" fontWeight="medium" mb="1">
                {kegiatan.jenis}
               </Text>
               <Text fontSize="xl" fontWeight="normal">
                 {kegiatan.duration}
               </Text>
             </Flex>
           </Flex>
         ))}
 
         <Text fontSize="lg" fontWeight="normal" color="gray.500">
           + {kegiatanData.length} Kegiatan
         </Text>
       </Flex>
     </Flex>
   );
 };

 export default EkskulTab;
 