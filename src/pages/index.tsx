import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogOverlay,
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
  useBreakpointValue,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React, { useState } from "react";
import { MdArrowForwardIos, MdOutlineRemoveRedEye } from "react-icons/md";
import { AiFillInfoCircle } from "react-icons/ai";
import { RiEyeCloseLine } from "react-icons/ri";
import { GoBook } from "react-icons/go";
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

  const [showAlertDialog, setShowAlertDialog] = useState(false);

  const resetPassword = () => {
    // Perform password reset logic here

    // Show the alert dialog
    setShowAlertDialog(true);
    // Close the modal
    closeModalPass();
  };

  const closeAlertDialog = () => {
    setShowAlertDialog(false);
  };

  const carouselSlides = [
    {
      title: "Slide 1",
      image: "/img/tatacara/cara1.png",
      imageMobile: "/img/tatacara/cara1-m.png",
    },
    {
      title: "Slide 2",
      image: "/img/tatacara/cara2.png",
      imageMobile: "/img/tatacara/cara2-m.png",
    },
    {
      title: "Slide 3",
      image: "/img/tatacara/cara3.png",
      imageMobile: "/img/tatacara/cara3-m.png",
    },
    {
      title: "Slide 4",
      image: "/img/tatacara/cara4.png",
      imageMobile: "/img/tatacara/cara4-m.png",
    },
    {
      title: "Slide 5",
      image: "/img/tatacara/cara5.png",
      imageMobile: "/img/tatacara/cara5-m.png",
    },
  ];

  const modalSize = useBreakpointValue({ base: "4xl", md: "4xl" });
  const modalSize2 = useBreakpointValue({ base: "sm", md: "xl" });

  return (
    <>
      <Flex
        w="100%"
        p={{ base: "6", md: "10" }}
        minH={"100vh"}
        justifyContent={{ base: "left", md: "center" }}
        gap={{ base: "4", md: "12" }}
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
            w={{ base: "180px", md: "150px" }}
          />
          <Box display={{ base: "none", md: "block" }} w="600px">
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
            w="400px"
            maxW={{ base: "70vw", md: "" }}
            fontWeight="400"
            mt={{ base: "", md: "2" }}
          >
            Monitor perkembangan kuliah anak dengan aplikasi myITS Wali
          </Text>
        </Flex>
        <Flex direction="column" h="full" gap={{ base: "4", md: "6" }}>
          {" "}
          <Card
            boxShadow="lg"
            p={{ base: "24px", md: "32px" }}
            alignItems="center"
            flexDirection="column"
            gap={{ base: "16px", md: "24px" }}
            w={{ base: "full", md: "32rem" }}
            {...rest}
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={{ sm: "xl", md: "3xl" }} fontWeight="500">
                Sebagai Wali
              </Text>
            </Flex> 
            <Flex
              bg="green.100"
              color="green.700"
              w="full"
              p="2"
              rounded="lg"
              fontWeight="500"
              alignItems='center'
              fontSize={{ base: "sm", md: "md" }}
              gap='2'
              mb={{ base:'0',md:'-2' }}
            >
              <AiFillInfoCircle />
              Mohon lihat panduan jika belum memiliki akun
            </Flex>
            <Button
              fontSize={{ base: "md", md: "lg" }}
              leftIcon={<GoBook />}
              colorScheme="blue"
              fontWeight="500"
              variant="outline"
              w="full"
              size="lg"
              rounded="lg"
              onClick={() => setShowModal(true)}
            >
              Lihat Panduan Pendaftaran
            </Button>

            <FormControl>
              <FormLabel
                display="flex"
                fontSize={{ base: "sm", md: "md" }}
                fontWeight="500"
                color={textColor}
                mb={{ base: "4px", md: "8px" }}
              >
                Email/No. Handphone
              </FormLabel>
              <Input
                isRequired={true}
                rounded="lg"
                variant="auth"
                fontSize={{ base: "sm", md: "md" }}
                ms={{ base: "0px", md: "0px" }}
                type="email"
                placeholder="Masukkan Email/No. Handphone"
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
                  placeholder="Masukkan Password"
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
                  size={modalSize2}
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
                        onClick={resetPassword}
                      >
                        Reset Password
                      </Button>
                    </ModalBody>
                  </ModalContent>
                </Modal>

                <AlertDialog
                  isOpen={showAlertDialog}
                  onClose={closeAlertDialog}
                  isCentered
                  leastDestructiveRef={undefined}
                  size={modalSize2}
                >
                  <AlertDialogOverlay />
                  <AlertDialogContent rounded="xl" py="2">
                    <AlertDialogBody
                      display="flex"
                      flexDirection="column"
                      justifyContent="center"
                      gap="2"
                    >
                      <Image
                        src="/img/icons/reset.png"
                        w="100px"
                        h="100px"
                        alignSelf="center"
                        my="4"
                      />
                      <Text
                        align="center"
                        fontSize={{ base: "xl", md: "2xl" }}
                        fontWeight="500"
                      >
                        {" "}
                        Link Reset Telah dikirim
                      </Text>
                      <Text align="center">
                        {" "}
                        Kami telah mengirimkan instruksi reset password ke
                        alamat email terdaftar.
                      </Text>
                    </AlertDialogBody>
                    <AlertDialogFooter>
                      <Button
                        fontSize={{ base: "md", md: "lg" }}
                        rightIcon={<MdArrowForwardIos />}
                        colorScheme="blue"
                        fontWeight="500"
                        variant="its"
                        w="full"
                        size="lg"
                        rounded="lg"
                        onClick={closeAlertDialog}
                      >
                        Lanjutkan
                      </Button>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
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
                >
                  Masuk Sebagai Wali
                </Button>
              </Link>

              <Modal
                isOpen={showModal}
                onClose={closeModal}
                size={modalSize}
                isCentered
              >
                <ModalOverlay />
                <ModalContent rounded="2xl">
                  <ModalHeader fontSize={{ base:'lg',md:"2xl" }}>
                    Tata Cara Pembuatan Akun
                  </ModalHeader>
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
            maxW={{ base: "full", md: "32rem" }}
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
