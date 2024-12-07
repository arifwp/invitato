import { StackProps, Text, VStack } from "@chakra-ui/react";
import { HorizontalImages } from "../components/HorizontalImages";

interface Props extends StackProps {
  welcomeSectionRef: any;
}

const WelcomeSection = ({ welcomeSectionRef, ...rest }: Props) => {
  return (
    <VStack
      ref={welcomeSectionRef}
      w={"100%"}
      h={"100%"}
      gap={10}
      bgColor={"#FEFEFE"}
      {...rest}
    >
      <VStack w={"100%"} pt={10} px={10} gap={0} textAlign={"center"}>
        <Text
          variant={"poppins"}
          fontWeight={"600"}
          letterSpacing={2}
          fontSize={["xs", null, "sm"]}
        >
          DEAR MR-MRS-MS,
        </Text>

        <Text
          variant={"poppins"}
          fontWeight={"600"}
          letterSpacing={2}
          fontSize={["xs", null, "sm"]}
        >
          Family & Friends
        </Text>
      </VStack>

      <VStack w={"100%"} px={10} gap={0} textAlign={"center"}>
        <Text
          variant={"butler"}
          fontWeight={"semibold"}
          fontSize={["2xl", null, "4xl"]}
        >
          Welcome to
        </Text>

        <Text
          variant={"butler"}
          fontWeight={"semibold"}
          fontSize={["2xl", null, "4xl"]}
        >
          Tiffany & Jared’s
        </Text>

        <Text
          variant={"butler"}
          fontWeight={"semibold"}
          fontSize={["2xl", null, "4xl"]}
        >
          Wedding Website
        </Text>
      </VStack>

      <VStack w={"100%"} px={10} gap={0} textAlign={"center"}>
        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          Together with joyful hearts and the grace of God, we
        </Text>

        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          joyfully announce the upcoming of our marriage.
        </Text>
      </VStack>

      <VStack w={"100%"} px={10} gap={0} textAlign={"center"}>
        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          Together with joyful hearts and the grace of God, we
        </Text>

        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          joyfully announce the upcoming of our marriage.
        </Text>
      </VStack>

      <VStack w={"100%"} px={10} gap={0} textAlign={"center"}>
        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          Together with joyful hearts and the grace of God, we
        </Text>

        <Text
          as={"i"}
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["md", null, "lg"]}
        >
          joyfully announce the upcoming of our marriage.
        </Text>
      </VStack>

      <HorizontalImages />
    </VStack>
  );
};

export default WelcomeSection;
