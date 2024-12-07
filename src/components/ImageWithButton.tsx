import { StackProps, Text, VStack } from "@chakra-ui/react";
import { PrimaryButton } from "./PrimaryButton";

interface Props extends StackProps {
  title: string;
  btnText: string;
  onClickBtn: () => void;
}

export const ImageWithButton = ({
  title,
  btnText,
  onClickBtn,
  ...rest
}: Props) => {
  return (
    <VStack
      className="image-with-button"
      w={"100%"}
      h={"300px"}
      bgImage={"/images/place-1.webp"}
      bgPos={"center"}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      justify={"center"}
      alignItems={"center"}
      {...rest}
    >
      <Text variant={"butler"} fontSize={["2xl", null, "3xl"]} color={"white"}>
        {title}
      </Text>

      <PrimaryButton as={"i"} w={["140px", null, "200px"]} onClick={onClickBtn}>
        {btnText}
      </PrimaryButton>
    </VStack>
  );
};
