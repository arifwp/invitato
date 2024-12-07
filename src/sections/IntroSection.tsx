import { StackProps, Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useState } from "react";
import { PrimaryButton } from "../components/PrimaryButton";

const slideOut = keyframes`
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(-100%); opacity: 0; }
`;

interface Props extends StackProps {
  onOpenNextSection: () => void;
}

export const IntroSection = ({ onOpenNextSection, ...rest }: Props) => {
  const [isExit, setIsExit] = useState<boolean>(false);
  const slideOutAnimation = `${slideOut} 0.5s forwards`;

  const moveNextSection = () => {
    setIsExit(true);
    setTimeout(onOpenNextSection, 500);
  };

  return (
    <VStack
      className="intro-secti¡on"
      w={"100%"}
      bgImage={"/images/bg-intro.webp"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPos={"center"}
      animation={isExit ? slideOutAnimation : "none"}
      {...rest}
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

        <PrimaryButton py={1} px={14} as={"i"} onClick={moveNextSection}>
          Open
        </PrimaryButton>
      </VStack>
    </VStack>
  );
};
