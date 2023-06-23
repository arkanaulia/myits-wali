import React, { useState } from "react";
import { Box, Image, Flex, Button, useBreakpointValue } from "@chakra-ui/react";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

interface CarouselProps {
  slides: {
    image: string;
    imageMobile: string;
    title: string;
  }[];
  closeModal: () => void;
}

const Carousel = ({ slides, closeModal }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  
  const closeModalAndReset = () => {
   closeModal(); // Panggil fungsi closeModal dari prop
   setCurrentIndex(0); // Reset currentIndex saat modal ditutup
 };

 const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      gap="6"
    >
      <Image
        src={isMobile? slides[currentIndex].imageMobile : slides[currentIndex].image}
        alt={slides[currentIndex].title}
      />
      <Flex justifyContent="center">
        {slides.map((_, index) => (
          <Box
            key={index}
            w="12px"
            h="12px"
            bg={index === currentIndex ? "blue.500" : "gray.300"}
            rounded="full"
            mx="1"
            cursor="pointer"
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </Flex>
      <Box w="max-content" mb="4">
        <Button
          mx="2"
          variant="outline"
          w="32"
          rounded="lg"
          colorScheme="blue"
          leftIcon={<MdArrowBackIosNew />}
          onClick={goToPreviousSlide}
          disabled={currentIndex === 0}
        >
          Previous
        </Button>
        <Button
          mx="2"
          variant={currentIndex === slides.length - 1 ? "solid" : "its"}
          rightIcon={currentIndex === slides.length - 1 ? <AiOutlineClose /> : <MdArrowForwardIos />}
          w="32"
          rounded="lg"
          colorScheme={currentIndex === slides.length - 1 ? "red" : "blue"}
          onClick={
            currentIndex === slides.length - 1 ? closeModalAndReset : goToNextSlide
          }
        >
          {currentIndex === slides.length - 1 ? "Close" : "Next"}
        </Button>
      </Box>
    </Flex>
  );
};

export default Carousel;
