import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Flex, HStack, Image } from "@chakra-ui/react";
import { useState } from "react";
import { slidesImage } from "../utils/constants";
import { PrimaryButton } from "./PrimaryButton";

interface Props extends BoxProps {}

export const HorizontalImages = ({ ...rest }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(2);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;

      return nextIndex >= slidesImage.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;

      return prevIndex < 0 ? slidesImage.length - 1 : prevIndex;
    });
  };

  return (
    <Box className={"horizontal-images"} w="100%" {...rest}>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <HStack
          gap={1}
          transform={`translateX(calc(-${currentIndex} * (300px + 16px) + 50% - 150px))`}
          transition="transform 0.5s ease-in-out"
        >
          {slidesImage.map((src, index) => (
            <Box
              key={index}
              flex="none"
              w="300px"
              h="300px"
              borderRadius="md"
              overflow="hidden"
              transition="transform 0.5s ease-in-out"
              transform={currentIndex === index ? "scale(1)" : "scale(0.85)"}
              opacity={currentIndex === index ? 1 : 0.7}
              boxShadow={currentIndex === index ? "lg" : "base"}
              transformOrigin={"center center"}
            >
              <Image
                src={src}
                alt={`Slide ${index}`}
                objectFit="cover"
                w="100%"
                h="100%"
                borderRadius="md"
              />
            </Box>
          ))}
        </HStack>
      </Flex>

      <HStack w={"100%"} p={4} mt={4} gap={4} justify="end">
        <PrimaryButton onClick={handlePrev}>
          <ArrowBackIcon />
        </PrimaryButton>
        <PrimaryButton onClick={handleNext}>
          <ArrowForwardIcon />
        </PrimaryButton>
      </HStack>
    </Box>
  );
};
