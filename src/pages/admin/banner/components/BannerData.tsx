import { useState } from "react";
import { Box, Button, Flex, Image, Input, Text } from "@chakra-ui/react";

const BannerCarousel = () => {
  const [activeBannerIndex, setActiveBannerIndex] = useState(0);
  const [banners, setBanners] = useState([
    {
      imageUrl: "/img/dashboards/banner.png",
      hyperlink: "https://example.com/banner1",
    },
    {
      imageUrl: "/img/dashboards/banner.png",
      hyperlink: "https://example.com/banner2",
    },
    {
      imageUrl: "/img/dashboards/banner.png",
      hyperlink: "https://example.com/banner3",
    },
  ]);

  const handleNextBanner = () => {
    setActiveBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  const handlePreviousBanner = () => {
    setActiveBannerIndex(
      (prevIndex) => (prevIndex - 1 + banners.length) % banners.length
    );
  };

  const handleDeleteBanner = () => {
    setBanners((prevBanners) => {
      const updatedBanners = [...prevBanners];
      updatedBanners.splice(activeBannerIndex, 1);
      return updatedBanners;
    });
    setActiveBannerIndex((prevIndex) =>
      Math.min(prevIndex, banners.length - 2)
    );
  };

  const { imageUrl, hyperlink } = banners[activeBannerIndex];

  return (
    <Box display="flex" flexDirection="column" alignItems='center' gap="8">
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        w={{ base: "full", md: "full" }}
        alignItems="center"
        gap={{ base:'4',md:"8" }}
        justifyContent="center"
      >
        <Flex direction='column' justifyContent='center' gap='4' alignItems='center'>
          <Image src={imageUrl} alt="Banner" maxH="200px" objectFit="contain" />
          
        </Flex>
        <Flex direction="column" w={{ base: "full", md: "50%" }}>
          <Text fontSize={{ sm: "md", md: "lg" }} mb="1" fontWeight="500">
            Hyperlink
          </Text>
          <Input
            value={hyperlink}
            placeholder="Masukkan hyperlink disini..."
          ></Input>
          <Button
            mt="4"
            w={{ base: "full", md: "48" }}
            rounded="lg"
            colorScheme="red"
            onClick={handleDeleteBanner}
          >
            Hapus Banner
          </Button>
        </Flex>
      </Box>
      <Flex w='max-content'>
            {banners.map((_, index) => (
              <Box
                key={index}
                w="4"
                h="4"
                rounded="full"
                bg={index === activeBannerIndex ? "blue.500" : "gray.500"}
                mx="1"
                transition="width 0.3s ease-in-out"
              />
            ))}
          </Flex>
      <Box w="max-content">
        <Button
          mx="2"
          variant="its"
          w="32"
          rounded="lg"
          colorScheme="blue"
          onClick={handlePreviousBanner}
        >
          Sebelumnya
        </Button>
        <Button
          mx="2"
          variant="its"
          w="32"
          rounded="lg"
          colorScheme="blue"
          onClick={handleNextBanner}
        >
          Selanjutnya
        </Button>
      </Box>
    </Box>
  );
};

export default BannerCarousel;
