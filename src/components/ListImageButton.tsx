import { StackProps, Text, useDisclosure, VStack } from "@chakra-ui/react";
import { ImageWithButton } from "./ImageWithButton";
import { RootSidebar } from "./RootSidebar";
import { ListDrawerCards } from "./ListDrawerCards";

interface Props extends StackProps {}

export const ListImageButton = ({ ...rest }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const openYoutube = () => {
    window.open(
      "https://www.youtube.com/watch?v=ApX0LaS6gSM&ab_channel=HidupHendryClar",
      "_blank" // This opens the link in a new tab
    );
  };
  return (
    <>
      <VStack className="root-image-button" w={"100%"} gap={0} {...rest}>
        <ImageWithButton
          title="Wedding Gift"
          btnText="Send Gift"
          onClickBtn={() => onOpen()}
        />

        <ImageWithButton
          title="Live Streaming"
          btnText="Open via Youtube"
          onClickBtn={() => openYoutube}
        />
      </VStack>

      <RootSidebar isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
        <VStack
          w={"100%"}
          h={"100%"}
          minH={"100dvh"}
          gap={0}
          textAlign={"center"}
          align={"stretch"}
          // justify={"space-between"}
        >
          <VStack w={"100%"} p={10} gap={0} bg={"white"}>
            <Text
              variant={"newsreader"}
              whiteSpace={"normal"}
              wordBreak={"break-word"}
              fontSize={["md", null, "lg"]}
              fontWeight={"medium"}
            >
              For beloved ones who may want to show
            </Text>

            <Text
              variant={"newsreader"}
              whiteSpace={"normal"}
              wordBreak={"break-word"}
              fontSize={["md", null, "lg"]}
              fontWeight={"medium"}
            >
              your sincere love by sending gift, please
            </Text>

            <Text
              variant={"newsreader"}
              whiteSpace={"normal"}
              wordBreak={"break-word"}
              fontSize={["md", null, "lg"]}
              fontWeight={"medium"}
            >
              kindly tap the button down below:
            </Text>
          </VStack>

          <ListDrawerCards isCopy={() => onClose()} />
        </VStack>
      </RootSidebar>
    </>
  );
};
