import { Button, ButtonProps } from "@chakra-ui/react";

interface Props extends ButtonProps {
  children?: any;
}

export const PrimaryButton = ({ children = "Button", ...rest }: Props) => {
  return (
    <Button
      w={"80px"}
      h={"34px"}
      borderRadius={0}
      borderWidth={"1px"}
      borderColor={"black"}
      bg={"#F9F7F3"}
      fontFamily={"butler"}
      fontWeight={"400"}
      cursor={"pointer"}
      _hover={{ backgroundColor: "gray.200", color: "white" }}
      type="submit"
      {...rest}
    >
      {children}
    </Button>
  );
};
