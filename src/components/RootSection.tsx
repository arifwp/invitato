import { StackProps, VStack } from "@chakra-ui/react";

interface Props extends StackProps {
  children: any;
}

export const RootSection = ({ children, ...rest }: Props) => {
  return (
    <VStack
      className="root-section"
      w={"100%"}
      maxW={"500px"}
      maxH={"100dvh"}
      overflowY={"scroll"}
      zIndex={2}
    >
      {children}
    </VStack>
  );
};
