import { Image, Text, VStack } from "@chakra-ui/react";
import { BrideGroomInfo } from "../components/BrideGroomInfo";

export const BrideGroomSection = () => {
  return (
    <VStack className="bridegroom-section" w={"100%"}>
      <VStack w={"100%"} p={10}>
        <Text
          variant={"poppins"}
          fontWeight={"bold"}
          color={"black"}
          fontSize={["sm", null, "md"]}
          letterSpacing={2}
        >
          MEET THE BRIDE & GROOM
        </Text>
      </VStack>

      <VStack w={"100%"} position={"relative"}>
        <Image
          src="/images/bridegroom.webp"
          w={"300px"}
          objectFit={"cover"}
          objectPosition={"center"}
          style={{ aspectRatio: 1 }}
        />

        <Image
          src="/images/curved-line.webp"
          w={"300px"}
          top={0}
          left={0}
          objectFit={"contain"}
          objectPosition={"center"}
          position={"absolute"}
        />
      </VStack>

      <BrideGroomInfo
        name="Tiffany Smith"
        ig="@tiffanyinvitato"
        igLink="https://www.instagram.com/tiffanyinvitato"
        parentsInfo="The Daughter of"
        parents="Mr. Smith & Mrs. Bellyna"
      />

      <BrideGroomInfo
        name="Robin Jared Lucas"
        ig="@jaredinvitato"
        igLink="https://www.instagram.com/jaredinvitato"
        parentsInfo="The Son of"
        parents="Mr. Lucas & Mrs. Anita"
      />
    </VStack>
  );
};
