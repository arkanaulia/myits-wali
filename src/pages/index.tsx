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
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Card from "components/card/Card";
import React from "react";
import { MdArrowForwardIos, MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";
import Link from "next/link";

export default function Home(props: { [x: string]: any }) {
  const { ...rest } = props;
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorBrand = useColorModeValue("brand.500", "white");
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <Box
      w="100%"
      h={{ base: "", md: "100vh" }}
      p="6"
      bgColor="white"
      backgroundImage="url('/img/dashboards/pattern.svg')"
    >
      <Flex
        w="100%"
        h="100%"
        justifyContent={{ base:'left',md:"center" }}
        gap={{ base: "4", md: "32" }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base:'left',md:"center" }}
      >
        <Flex
          direction="column"
          maxW={{ base: "full", md: "30vw" }}
          alignItems={{ base: "center", md: "flex-start" }}
          pb={{ base: "0", md: "32" }}
        >
          <Image
            src="/img/icons/logohome.png"
            h="auto"
            w={{ base: "180px", md: "200px" }}
          />
          <Box display={{ base: "none", md: "block" }}>
            <Text fontSize={{ base: "2xl", md: "5xl" }}>Selamat Datang di</Text>
            <Text
              fontSize={{ base: "2xl", md: "5xl" }}
              fontWeight="600"
              mt={{ base: "-1", md: "-4" }}
            >
              myITS Wali
            </Text>
          </Box>
          <Text
            fontSize={{ base: "md", md: "2xl" }}
            align={{ base: "center", md: "left" }}
            maxW={{ base: "70vw", md: "" }}
            fontWeight="400"
            mt={{ base: "", md: "2" }}
          >
            Monitor perkembangan kuliah anak dengan aplikasi myITS Wali
          </Text>
        </Flex>
        <Flex direction="column" gap={{ base: "4", md: "6" }}>
          {" "}
          <Card
            boxShadow="lg"
            p={{ base: "24px", md: "32px" }}
            alignItems="center"
            flexDirection="column"
            gap={{ base: "16px", md: "24px" }}
            w={{ base: "full", md: "28vw" }}
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
                <Link href="/auth/forgot-password">
                  <a>
                    <Text
                      color={textColorBrand}
                      fontSize={{ base: "sm", md: "md" }}
                      w="max-content"
                      fontWeight="500"
                    >
                      Lupa password?
                    </Text>
                  </a>
                </Link>
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
              >
                Lihat Panduan Pendaftaran
              </Button>
            </FormControl>
          </Card>
          <Card
            boxShadow="lg"
            p={{ base: "24px", md: "32px" }}
            alignItems="center"
            flexDirection="column"
            gap={{ base: "16px", md: "24px" }}
            w={{ base: "full", md: "28vw" }}
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
    </Box>
  );
}
