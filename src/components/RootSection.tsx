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
      h={"100%"}
      minH={"100dvh"}
      overflowY={"scroll"}
    >
      {children}
    </VStack>
  );
};
