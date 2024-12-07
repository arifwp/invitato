import { Text, VStack } from "@chakra-ui/react";
import { ImQuotesLeft } from "react-icons/im";

export const QuoteSection = () => {
  return (
    <VStack className="quote-section" w={"100%"} p={10} gap={4} bg={"#F9F7F3"}>
      <ImQuotesLeft size={30} color="#CDC0B1" />

      <Text
        as={"i"}
        variant={"butler"}
        fontWeight={"light"}
        fontSize={["sm", null, "md"]}
        textAlign={"center"}
      >
        “And of His signs is that He created for you from yourselves mates that
        you may find tranquility in them, and He placed between you affection
        and mercy. Indeed in that are signs for a people who give thought.”
      </Text>

      <Text
        variant={"poppins"}
        fontWeight={"bold"}
        fontSize={["sm", null, "md"]}
        letterSpacing={2}
      >
        - Q.S. Ar-Rum: 21
      </Text>
    </VStack>
  );
};
