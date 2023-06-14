import { Box, Flex, Input, Text } from "@chakra-ui/react";
import AdminLayout from "layouts/admin";
import { Image } from "components/image/Image";
import Card from "components/card/Card";
import FileUpload from "./components/UploadFiles";
import { MdArrowForwardIos } from "react-icons/md";
import { Button } from "@chakra-ui/react";
import BannerCarousel from "./components/BannerData";


export default function Presensi(props: { [x: string]: any }) {
  // Chakra Color Mode
  const { ...rest } = props;


  return (
    <AdminLayout>
      <Box pt={{ base: "40px", md: "80px", xl: "80px" }}>
        <>
          <Flex direction="column" gap={{ base: "20px", md: "24px" }}>
            <Flex alignItems="center" gap="6" w="full">
              <Box>
                <Image
                  src="/img/icons/banner.png"
                  h={{ base: "30px", md: "40px" }}
                  w={{ base: "30px", md: "40px" }}
                  alt="info"
                />
              </Box>

              <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="600">
                Kelola Banner
              </Text>
            </Flex>
            <Card
              boxShadow="lg"
              p={{ base: "24px", md: "32px" }}
              alignItems="center"
              flexDirection="column"
              gap={{ base: "16px", md: "24px" }}
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Flex w="full" alignItems="center">
                <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                  Tambah Banner
                </Text>
              
              </Flex>
              <Box w="full">
            <BannerCarousel />
                </Box>
        
            </Card>
            <Card
              boxShadow="lg"
              p={{ base: "24px", md: "32px" }}
              alignItems="center"
              flexDirection="column"
              gap={{ base: "16px", md: "24px" }}
              backgroundImage="url('/img/dashboards/pattern.svg')"
              backgroundRepeat="repeat-y"
              backgroundPosition="center"
              backgroundSize="auto"
              backgroundBlendMode="hard-light"
              w="100%"
              {...rest}
            >
              <Flex w="full" alignItems="center">
                <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                  Banner Saat Ini
                </Text>
              
              </Flex>
              <Box w="full">
            <FileUpload />
                </Box>
            <Flex direction='column' w='full'>
              <Text fontSize={{ sm: "md", md: "lg" }} fontWeight="500">Hyperlink</Text>
              <Input placeholder="Masukkan hyperlink disini..."></Input>
            </Flex>
            <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                >
                  Tambah Banner
                </Button>
            </Card>
          </Flex>
        </>
      </Box>
    </AdminLayout>
  );
}
