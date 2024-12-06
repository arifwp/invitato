import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  DrawerProps,
  Heading,
  VStack,
} from "@chakra-ui/react";
import useScreenWidth from "../lib/useScreenWidth";

interface Props extends DrawerProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const Sidebar = ({ isOpen, onOpen, onClose, ...rest }: Props) => {
  const sw = useScreenWidth();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" {...rest}>
      <DrawerOverlay />
      <DrawerContent
        w={"100%"}
        maxW={sw > 1024 ? "500px" : "calc(100% - 50px)"}
        bg={"#F9F7F3"}
      >
        <DrawerBody>
          <VStack
            w={"100%"}
            h={"100%"}
            minH={"100dvh"}
            px={2}
            py={10}
            align={"end"}
            justify={"space-between"}
          >
            <Heading
              as={"i"}
              fontSize={"4xl"}
              fontFamily={"butler"}
              fontWeight={"normal"}
              whiteSpace={"normal"}
              wordBreak={"break-word"}
              textAlign={"end"}
            >
              #TImetoshaRE
            </Heading>
          </VStack>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};
