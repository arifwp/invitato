import { Text, VStack } from "@chakra-ui/react";
import { ImageWithButton } from "../components/ImageWithButton";
import { ListImageButton } from "../components/ListImageButton";

export const PlaceTimeSection = () => {
  return (
    <VStack className="placetime-section" w={"100%"} align={"stretch"}>
      <VStack w={"100%"} p={10} align={"stretch"}>
        <Text
          variant={"poppins"}
          fontWeight={"semibold"}
          fontSize={["xs", null, "sm"]}
          letterSpacing={2}
        >
          PLACE & TIME
        </Text>

        <Text
          variant={"butler"}
          fontWeight={"normal"}
          fontSize={["2xl", null, "3xl"]}
        >
          Holy Matrimony
        </Text>

        <Text
          variant={"newsreader"}
          fontWeight={"normaal"}
          fontSize={["md", null, "lg"]}
        >
          Date: Monday, 26 February 2024
        </Text>

        <Text
          mt={-2}
          variant={"newsreader"}
          fontWeight={"normaal"}
          fontSize={["md", null, "lg"]}
        >
          Time: 10.00 WIB
        </Text>
      </VStack>

      <ListImageButton />
    </VStack>
  );
};
