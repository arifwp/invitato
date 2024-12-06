import { SlideFade, Text, VStack } from "@chakra-ui/react";

export const DesktopView = () => {
  return (
    <VStack
      className="desktop-view"
      w={"100%"}
      h={"100%"}
      minH={"100dvh"}
      bgImage={"/images/bg-primary.webp"}
      bgSize={"cover"}
      color={"white"}
    >
      <VStack
        w={"100%"}
        h={"100dvh"}
        p={10}
        bgColor={"#00000080"}
        align={"stretch"}
        gap={10}
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
          <VStack w={"100%"} align={"stretch"} as={"i"}>
            <Text fontSize={["xl", null, "2xl"]} variant={"butler"}>
              "Aku ingin mencintaimu dengan sederhana; dengan kata yang tak
              sempat diucapkan kayu kepada api yang menjadikannya abu. Aku ingin
              mencintaimu dengan sederhana; dengan isyarat yang tak sempat
              disampaikan awan kepada hujan yang menjadikannya tiada."
            </Text>

            <Text fontSize={"md"} variant={"butler"}>
              — Sapardi Djoko Damono
            </Text>
          </VStack>
        </SlideFade>
      </VStack>
    </VStack>
  );
};
