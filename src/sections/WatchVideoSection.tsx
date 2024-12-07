import { Image, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ScheduleComponents } from "../components/ScheduleComponents";

export const WatchVideoSection = () => {
  return (
    <VStack className="watch-video-section" w={"100%"}>
      <VStack w={"100%"} p={10} gap={0}>
        <Text
          variant={"butler"}
          whiteSpace={"normal"}
          wordBreak={"break-word"}
          fontWeight={"semibold"}
          fontSize={["xl", null, "2xl"]}
        >
          Tiffany & Jared are
        </Text>
        <Text
          variant={"butler"}
          whiteSpace={"normal"}
          wordBreak={"break-word"}
          fontWeight={"semibold"}
          fontSize={["xl", null, "2xl"]}
        >
          Getting Married!
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

      <Text
        mt={6}
        as={Link}
        to={
          "https://www.youtube.com/watch?v=WEC5RezD5jU&ab_channel=CaecilliaAgatha"
        }
        target="_blank"
        rel="noopener noreferrer"
        variant={"poppins"}
        fontWeight={"semibold"}
        fontSize={["sm", null, "md"]}
        textDecor={"underline"}
        letterSpacing={2}
      >
        WATCH OUR VIDEO
      </Text>

      <ScheduleComponents />
    </VStack>
  );
};
