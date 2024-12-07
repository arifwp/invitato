import { SlideFade, Text, VStack } from "@chakra-ui/react";

export const DesktopView = () => {
  return (
    <VStack
      w={"calc(100% - 500px)"}
      h={"100%"}
      position="fixed"
      top={0}
      left={0}
      zIndex={1}
      bgImage={"/images/bg-primary.webp"}
      bgSize={"cover"}
      bgPos={"center"}
      bgBlendMode={"overlay"}
      bgColor={"#00000080"}
      color={"white"}
      overflowY={"clip"}
    >
      <VStack
        w={"calc(100vw - 500px)"}
        h={"100%"}
        p={10}
        gap={10}
        mr={3}
        bgColor={"#FFFFFF20"}
        align={"start"}
      >
        <SlideFade
          in={true}
          offsetY={"20px"}
          transition={{ enter: { duration: 1 } }}
        >
          <Text
            variant="poppins"
            fontSize={["lg", null, "xl"]}
            fontWeight="bold"
            letterSpacing={2}
          >
            WEDDING ANNOUNCEMENT
          </Text>
        </SlideFade>

        <VStack
          w={"100%"}
          gap={0}
          align={"stretch"}
          lineHeight={["380%", null, "500%"]}
        >
          <Text
            variant="butler"
            fontSize={["64px", null, "72px"]}
            fontWeight="normal"
            letterSpacing={6}
          >
            TIFFANY &
          </Text>

          <Text
            variant="butler"
            fontSize={["64px", null, "72px"]}
            fontWeight="normal"
            letterSpacing={6}
          >
            JARED
          </Text>
        </VStack>

        <SlideFade
          in={true}
          offsetY={"100px"}
          transition={{ enter: { duration: 1 } }}
        >
          <VStack w={"100%"} maxW={"800px"} align={"stretch"} as={"i"}>
            <Text fontSize={["lg", null, "xl"]} variant={"butler"}>
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>

            <Text fontSize={["lg", null, "xl"]} variant={"butler"}>
              — Sapardi Djoko Damono
            </Text>
          </VStack>
        </SlideFade>
      </VStack>
    </VStack>
  );
};
