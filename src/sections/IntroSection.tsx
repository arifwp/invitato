import { Button, StackProps, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";

const spin = keyframes`  
    0%   { transform: translateY(0); }
    50%  { transform: translateY(-10px); }
    100% { transform: translateY(0); }
`;

const slideOut = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

interface Props extends StackProps {
  onOpenNextSection: () => void;
}

export const IntroSection = ({ onOpenNextSection, ...rest }: Props) => {
  const [isExit, setIsExit] = useState<boolean>(false);
  const bounceAnimation = `${spin} infinite 2s linear`;
  const slideOutAnimation = `${slideOut} 0.5s forwards`;

  const moveNextSection = () => {
    setIsExit(true);
    setTimeout(onOpenNextSection, 500); // Adjust duration to match animation timing
  };

  return (
    <VStack
      className="intro-section"
      w={"100%"}
      bgImage={"/images/bg-intro.webp"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      animation={isExit ? slideOutAnimation : "none"}
    >
      <VStack
        w={"100%"}
        h={"100dvh"}
        p={10}
        bgColor={"#00000080"}
        color={"white"}
        justify={"center"}
      >
        <Text
          mt={20}
          variant="poppins"
          fontSize={["md", null, "lg"]}
          fontWeight="bold"
          justifySelf={"start"}
          letterSpacing={2}
        >
          WEDDING ANNOUNCEMENT
        </Text>

        <VStack h={"100%"} justify={"center"}>
          <VStack gap={0}>
            <Text variant="butler" fontSize="4xl" fontWeight="normal">
              Tiffany & Jared
            </Text>

            <Text variant="butler" fontSize="2xl" fontWeight="normal" as={"i"}>
              #TImetoshaRE
            </Text>
          </VStack>
        </VStack>

        <Button
          w={"100px"}
          h={"30px"}
          mb={10}
          borderRadius={0}
          borderWidth={"1px"}
          borderColor={"black"}
          bg={"white"}
          fontFamily={"butler"}
          fontWeight={"400"}
          as={"i"}
          transition="all .25s ease"
          cursor={"pointer"}
          animation={bounceAnimation}
          onClick={moveNextSection}
          _hover={{ opacity: 0.5 }}
        >
          Open
        </Button>
      </VStack>
    </VStack>
  );
};
