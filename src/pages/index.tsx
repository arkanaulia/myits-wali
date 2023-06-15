import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Icon,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { MdArrowForwardIos, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Link from "next/link";
import Carousel from "components/modal/CarouselModal";

export default function Home(props: { [x: string]: any }) {
  const { ...rest } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const [showModal, setShowModal] = React.useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const [showModalPass, setShowModalPass] = React.useState(false);
  const closeModalPass = () => {
    setShowModalPass(false);
  };

  const carouselSlides = [
    {
      title: "Slide 1",
      image: "/img/tatacara/cara1.png",
    },
    {
      title: "Slide 2",
      image: "/img/tatacara/cara1.png",
    },
    {
      title: "Slide 3",
      image: "/img/tatacara/cara1.png",
    },
    {
      title: "Slide 4",
      image: "/img/tatacara/cara1.png",
    },
    {
      title: "Slide 5",
      image: "/img/tatacara/cara1.png",
    },
  ];

  return (
    < >
      <Flex
        w="100%"
        p='10'
        minH={'100vh'}
        justifyContent={{ base: "left", md: "center" }}
        gap={{ base: "4", md: "32" }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "left", md: "center" }}
        backgroundImage="url('/img/dashboards/pattern.svg')"
      >
        <Flex
          direction="column"
          maxW={{ base: "full", md: "30vw" }}
          alignItems={{ base: "center", md: "flex-start" }}
          pb={{ base: "0", md: "48" }}
        >
          <Image
            src="/img/icons/logohome.png"
            h="auto"
            w={{ base: "180px", md: "200px" }}
          />
          <Box display={{ base: "none", md: "block" }} w='600px'>
            <Text fontSize={{ base: "2xl", md: "4xl" }}>Selamat Datang di</Text>
            <Text
              fontSize={{ base: "2xl", md: "4xl" }}
              fontWeight="600"
              mt={{ base: "-1", md: "-2" }}
            >
              myITS Wali
            </Text>
          </Box>
          <Text
            fontSize={{ base: "md", md: "xl" }}
            align={{ base: "center", md: "left" }}
            w='400px'
            maxW={{ base: "70vw", md: "" }}
            fontWeight="400"
            mt={{ base: "", md: "2" }}
          >
            Monitor perkembangan kuliah anak dengan aplikasi myITS Wali
          </Text>
        </Flex>
        <Flex direction="column" h='full' gap={{ base: "4", md: "6" }}>
          {" "}
          <Card
            boxShadow="lg"
            p={{ base: "24px", md: "32px" }}
            alignItems="center"
            flexDirection="column"
            gap={{ base: "16px", md: "24px" }}
            w={{ base: "full", md: "40vw" }}
            {...rest}
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                Sebagai Wali
              </Text>
            </Flex>
            <FormControl>
              <FormLabel
                display="flex"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="500"
                color={textColor}
                mb={{ base: "4px", md: "8px" }}
              >
                Username
              </FormLabel>
              <Input
                isRequired={true}
                rounded="lg"
                variant="auth"
                fontSize={{ base: "sm", md: "md" }}
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="mail@simmmple.com"
                mb={{ base: "8px", md: "16px" }}
                fontWeight="500"
                size="lg"
              />
              <FormLabel
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="500"
                color={textColor}
                display="flex"
                mb={{ base: "4px", md: "8px" }}
              >
                Password
              </FormLabel>
              <InputGroup size="md">
                <Input
                  isRequired={true}
                  rounded="lg"
                  fontSize={{ base: "sm", md: "md" }}
                  placeholder="Min. 8 characters"
                  mb={{ base: "10px", md: "16px" }}
                  size="lg"
                  type={show ? "text" : "password"}
                  variant="auth"
                />
                <InputRightElement display="flex" alignItems="center" mt="4px">
                  <Icon
                    color={textColorSecondary}
                    _hover={{ cursor: "pointer" }}
                    as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                    onClick={handleClick}
                  />
                </InputRightElement>
              </InputGroup>
              <Flex
                justifyContent="right"
                align="center"
                mb={{ base: "20px", md: "24px" }}
              >
                <Button
                  color="gray.500"
                  variant="link"
                  fontSize={{ base: "sm", md: "md" }}
                  w="max-content"
                  fontWeight="500"
                  cursor="pointer"
                  transition="all 0.2s ease-in-out"
                  _hover={{ color: "black" }}
                  onClick={() => setShowModalPass(true)}
                >
                  Lupa password?
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
                      <Text fontSize="md" mb="1">Masukkan Email Terdaftar</Text>
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
                        my='6'
                        onClick={closeModalPass}
                      >
                        Reset Password
                      </Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>
              </Flex>
              <Link href="/dashboard/beranda">
                <Button
                  fontSize={{ base: "md", md: "lg" }}
                  rightIcon={<MdArrowForwardIos />}
                  colorScheme="blue"
                  fontWeight="500"
                  variant="its"
                  w="full"
                  size="lg"
                  rounded="lg"
                  mb={{ base: "4", md: "4" }}
                >
                  Masuk Sebagai Wali
                </Button>
              </Link>
              <Button
                fontSize={{ base: "md", md: "lg" }}
                rightIcon={<MdArrowForwardIos />}
                colorScheme="blue"
                fontWeight="500"
                variant="outline"
                w="full"
                size="lg"
                rounded="lg"
                onClick={() => setShowModal(true)}
                noOfLines={1}
              >
                Lihat Panduan Pendaftaran
              </Button>

              <Modal
                isOpen={showModal}
                onClose={closeModal}
                size="2xl"
                isCentered
              >
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Tata Cara Pembuatan Akun</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Carousel slides={carouselSlides} closeModal={closeModal} />
                  </ModalBody>
                </ModalContent>
              </Modal>
            </FormControl>
          </Card>
          <Card
            boxShadow="lg"
            p={{ base: "24px", md: "32px" }}
            alignItems="center"
            flexDirection="column"
            gap={{ base: "16px", md: "24px" }}
            maxW={{ base: "full", md: "40vw" }}
            {...rest}
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                Sebagai Mahasiswa
              </Text>
            </Flex>
            <Button
              fontSize={{ base: "md", md: "lg" }}
              leftIcon={<img src="/img/dashboards/myits.svg" alt="Your Icon" />}
              fontWeight="500"
              variant="itsdark"
              w="full"
              size="lg"
              rounded="lg"
            >
              Masuk Dengan myITS
            </Button>
          </Card>
        </Flex>
      </Flex>
      </>
  );
}
