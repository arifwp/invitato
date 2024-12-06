import { HStack, StackProps, useDisclosure } from "@chakra-ui/react";
import { IoIosMenu } from "react-icons/io";
import { MdMusicNote } from "react-icons/md";
import { FloatingButton } from "./FloatingButton";
import { Sidebar } from "./Sidebar";

interface Props extends StackProps {
  onClickPlay: () => void;
}

export const ListFloatingButtons = ({ onClickPlay, ...rest }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <HStack
        m={6}
        className="wrap-floating-button"
        position={"absolute"}
        bottom={0}
        left={0}
        {...rest}
      >
        <FloatingButton
          label="drawer-button"
          icon={<IoIosMenu />}
          onClick={onOpen}
        />

        <FloatingButton
          label="music-button"
          icon={<MdMusicNote />}
          onClick={() => onClickPlay()}
        />
      </HStack>

      <Sidebar
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        children={undefined}
      />
    </>
  );
};
