import { ButtonProps, IconButton } from "@chakra-ui/react";

interface Props extends ButtonProps {
  icon: any;
  label?: string;
}

export const FloatingButton = ({ icon, label = "button", ...rest }: Props) => {
  return (
    <IconButton
      aria-label={label}
      size={["sm", null, "md"]}
      bg={"#997A5E"}
      icon={icon}
      color={"white"}
      {...rest}
    />
  );
};
