import { Box, HStack, StackProps, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { slidesImage } from "../utils/constants";

interface Props extends StackProps {
  scrollToWelcomeSection: () => void;
}

const slideInUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const zoomInOut = keyframes`
  0% { transform: scale(1); }
  100% { transform: scale(1.10); }
`;

export const ImageSection = ({ scrollToWelcomeSection, ...rest }: Props) => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const slideInAnimation = `${slideInUp} 0.5s forwards`;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slidesImage.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <VStack
      className="image-section"
      w="100%"
      justify="center"
      align="center"
      animation={slideInAnimation}
      {...rest}
    >
      <VStack
        w="100%"
        minH={"100dvh"}
        color="white"
        position="relative"
        justify="space-between"
        overflow={"hidden"}
      >
        {slidesImage.map((slide, index) => (
          <Box
            key={index}
            backgroundImage={`url(${slide})`}
            bgColor={"#00000080"}
            bgBlendMode={"overlay"}
            backgroundSize="cover"
            backgroundPosition="center"
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            transform={"scale(1.10)"}
            animation={
              activeSlide === index ? `${zoomInOut} 5s infinite` : "none"
            }
            opacity={activeSlide === index ? 1 : 0.5}
            zIndex={activeSlide === index ? 1 : 0.5}
            transition="opacity 1s ease"
          />
        ))}

        <Text
          mt={20}
          variant="poppins"
          fontSize={["md", null, "lg"]}
          fontWeight="bold"
          justifySelf="start"
          letterSpacing={2}
          zIndex={2}
        >
          WEDDING ANNOUNCEMENT
        </Text>

        <VStack gap={0} zIndex={2}>
          <Text
            variant="butler"
            fontSize={["2xl", null, "4xl"]}
            fontWeight="normal"
          >
            Tiffany & Jared
          </Text>

          <Text
            variant="butler"
            fontSize={["2xl", null, "4xl"]}
            fontWeight="normal"
          >
            #TImetoshaRE
          </Text>
        </VStack>

        <HStack
          w="100%"
          p={10}
          cursor="pointer"
          gap={1}
          justify="end"
          zIndex={2}
          onClick={scrollToWelcomeSection}
        >
          <Text variant="poppins" fontWeight="bold">
            SCROLL TO BEGIN
          </Text>
          <IoIosArrowDown fontSize="20px" />
        </HStack>
      </VStack>
    </VStack>
  );
};
