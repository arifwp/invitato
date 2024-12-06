import { Box, Flex, HStack, StackProps, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { IoIosArrowDown } from "react-icons/io";

interface Props extends StackProps {
  scrollToWelcomeSection: () => void;
}

const slideInUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

const fadeInFromNone = keyframes`
  0% {
      display: none;
      opacity: 0;
  }

  1% {
      display: block;
      opacity: 0;
  }

  100% {
      display: block;
      opacity: 1;
  }
`;

export const ImageSection = ({ scrollToWelcomeSection, ...rest }: Props) => {
  const slideInAnimation = `${slideInUp} 0.5s forwards`;

  return (
    <VStack
      w={"100%"}
      h={"100%"}
      animation={slideInAnimation}
      justify={"center"}
      align={"center"}
      {...rest}
    >
      <VStack
        w={"100%"}
        h={"100dvh"}
        color={"white"}
        position={"relative"}
        justify={"space-between"}
      >
        <Flex w={"100%"} h={"100%"} position={"absolute"}>
          <Box
            w={"100%"}
            h={"100%"}
            bgImage={"/images/slide-1.webp"}
            bgColor={"#00000080"}
            bgBlendMode={"overlay"}
            bgSize={"cover"}
            bgPos={"center"}
            animation={`${fadeInFromNone} 0.5s ease-out`}
          />
        </Flex>

        <Text
          mt={20}
          variant="poppins"
          fontSize={["md", null, "lg"]}
          fontWeight="bold"
          justifySelf={"start"}
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
          w={"100%"}
          p={10}
          cursor={"pointer"}
          gap={1}
          justify={"end"}
          zIndex={2}
          onClick={scrollToWelcomeSection}
        >
          <Text variant={"poppins"} fontWeight={"bold"}>
            SCROLL TO BEGIN
          </Text>

          <IoIosArrowDown fontSize={"20px"} />
        </HStack>
      </VStack>
    </VStack>
  );
};
