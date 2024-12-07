import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import useScreenWidth from "../lib/useScreenWidth";

interface Props {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: any;
}

export const RootSidebar = ({
  isOpen,
  onOpen,
  onClose,
  children,
  ...rest
}: Props) => {
  const sw = useScreenWidth();

  return (
    <Drawer isOpen={isOpen} onClose={onClose} placement="right" {...rest}>
      <DrawerOverlay />
      <DrawerContent
        w={"100%"}
        maxW={sw > 1024 ? "500px" : "calc(100% - 50px)"}
        bg={"#F9F7F3"}
      >
        <DrawerBody p={0}>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
