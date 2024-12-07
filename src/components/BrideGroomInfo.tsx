import { StackProps, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface Props extends StackProps {
  name: string;
  ig: string;
  igLink: string;
  parentsInfo: string;
  parents: string;
}

export const BrideGroomInfo = ({
  name,
  ig,
  igLink,
  parentsInfo,
  parents,
  ...rest
}: Props) => {
  return (
    <VStack w={"100%"} py={4} gap={1} {...rest}>
      <Text
        variant={"butler"}
        fontWeight={"normal"}
        fontSize={["2xl", null, "4xl"]}
      >
        {name}
      </Text>

      <Text
        as={Link}
        to={igLink}
        target="_blank"
        rel="noopener noreferrer"
        variant={"butler"}
        fontWeight={"normal"}
        fontSize={["lg", null, "xl"]}
        _hover={{ textDecor: "underline" }}
      >
        {ig}
      </Text>

      <Text
        as={"i"}
        variant={"butler"}
        fontWeight={"light"}
        fontSize={["md", null, "lg"]}
      >
        {parentsInfo}
      </Text>

      <Text
        mt={-2}
        as={"i"}
        variant={"butler"}
        fontWeight={"light"}
        fontSize={["md", null, "lg"]}
      >
        {parents}
      </Text>
    </VStack>
  );
};
