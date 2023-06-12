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
     <Flex alignItems="center" w="full" flexDirection="column" gap={{ base:'16px',md:"24px" }}>
       {/* Academic Data */}
       <Flex
      alignItems={{ base: "left", md: "center" }}
      w="full"
      flexDirection="row"
      gap={{ base:'20px',md:"24px" }}
    >
      <Box alignItems="center" w='max-content' flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
        >
          Nilai SKEM
        </Text>
        <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
          {ipkSkem}
        </Text>
      </Box>
      <Box alignItems="center" w='max-content' flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
        >
          SKS SKEM
        </Text>
        <Flex alignItems="end" gap="1">
          <Text fontSize={{ sm: "2xl", md: "3xl" }} fontWeight="500">
            {kreditSkem}
          </Text>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            color="gray.500"
            fontWeight="500"
            mb='1'
          >
            /{totalSkem}
          </Text>
        </Flex>
      </Box>
      <Box alignItems="center" w='max-content' flexDirection="column">
        <Text
          fontSize={{ base: "md", md: "xl" }}
          color="gray.500"
          fontWeight="normal"
          noOfLines={1}
        >
          Status SKEM
        </Text>
        <Text
          fontSize={{ sm: "2xl", md: "3xl" }}
          color="green.500"
          fontWeight="500"
        >
          {statusLulus}
        </Text>
      </Box>
    </Flex>
       {/* Kegiatan Data */}
       <Flex w="full" flexDirection="column" gap="2">
         <Text fontSize={{ base:'lg',md:"xl" }} fontWeight="normal" color="gray.500">
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
                 <Text noOfLines={1} fontSize={{ base:'lg',md:"2xl" }} fontWeight="500">
                   {kegiatan.title}
                 </Text>
                 <Text fontSize={{ base:'lg',md:"xl" }} fontWeight="normal">
                   {kegiatan.position}
                 </Text>
               </Box>
             </Flex>
             <Flex display={{ base:'none', md:'block' }} direction="column" alignItems="end">
               <Text fontSize="xl" fontWeight="500" mb="1">
                {kegiatan.jenis}
               </Text>
               <Text fontSize="xl" fontWeight="normal">
                 {kegiatan.duration}
               </Text>
             </Flex>
           </Flex>
         ))}
 
         <Text fontSize={{ base:'md',md:"lg" }} fontWeight="normal" color="gray.500">
           + {kegiatanData.length} Kegiatan
         </Text>
       </Flex>
     </Flex>
   );
 };

 export default EkskulTab;
 