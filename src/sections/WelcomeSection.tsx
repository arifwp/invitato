import { HStack, StackProps, Text, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  welcomeSectionRef: any;
}

export const WelcomeSection = ({ welcomeSectionRef, ...rest }: Props) => {
  return (
    <VStack
      ref={welcomeSectionRef}
      w={"100%"}
      h={"100%"}
      minH={"100dvh"}
      {...rest}
    >
      <HStack>
        <Text fontFamily={"butler"} fontSize={["md", null, "lg"]}>
          DEAR MR-MRS-MS
        </Text>

        <Text fontFamily={"butler"} fontSize={["md", null, "lg"]}>
          Family & Friends
        </Text>
      </HStack>
    </VStack>
  );
};
