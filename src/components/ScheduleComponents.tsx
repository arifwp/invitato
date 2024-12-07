import {
  Box,
  Flex,
  HStack,
  Image,
  StackProps,
  Text,
  VStack,
} from "@chakra-ui/react";
import { schedules, slidesImage } from "../utils/constants";
import { useState } from "react";
import { PrimaryButton } from "./PrimaryButton";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

interface Props extends StackProps {}

export const ScheduleComponents = ({ ...rest }: Props) => {
  const [currentIndex, setCurrentIndex] = useState<number>(1);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;

      return nextIndex >= 3 ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = prev - 1;

      return prevIndex < 0 ? 2 : prevIndex;
    });
  };

  return (
    <Box className={"horizontal-images"} w="100%" mt={6} {...rest}>
      <Flex w="100%" justifyContent="center" alignItems="center">
        <HStack
          gap={1}
          transform={`translateX(calc(-${currentIndex} * (300px + 16px) + 50% - 150px))`}
          transition="transform 0.5s ease-in-out"
        >
          {schedules.map((item, index) => (
            <VStack
              key={index}
              w="300px"
              h="260px"
              transition="transform 0.5s ease-in-out"
              transformOrigin={"center center"}
            >
              <Text
                variant={"butler"}
                fontWeight={"medium"}
                fontSize={["lg", null, "xl"]}
                textAlign={"center"}
                whiteSpace={"normal"}
                wordBreak={"break-word"}
              >
                {item.date}
              </Text>

              <Text
                variant={"newsreader"}
                fontWeight={"medium"}
                fontSize={["sm", null, "md"]}
                textAlign={"center"}
                whiteSpace={"normal"}
                wordBreak={"break-word"}
              >
                {item.description}
              </Text>
            </VStack>
          ))}
        </HStack>
      </Flex>

      <HStack w={"100%"} p={4} gap={4} justify="center">
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
