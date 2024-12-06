import { Text, VStack } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";

const slideInUp = keyframes`
  0% { transform: translateY(100%); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
`;

export const ImageSection = () => {
  const slideInAnimation = `${slideInUp} 0.5s forwards`;

  return (
    <VStack
      w={"100%"}
      h={"100%"}
      bg={"purple.200"}
      animation={slideInAnimation}
      justify={"center"}
      align={"center"}
    >
      <Text fontSize={"4xl"}>This is image section</Text>
    </VStack>
  );
};
