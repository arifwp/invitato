import { Input, InputProps } from "@chakra-ui/react";

interface Props extends InputProps {}

export const NumberInput = ({ ...rest }: Props) => {
  return (
    <Input
      type="text"
      autoComplete="off"
      placeholder="..."
      maxLength={20}
      onKeyDown={(e) => {
        if (
          !/[0-9]/.test(e.key) &&
          e.key !== "Backspace" &&
          e.key !== "Delete" &&
          e.key !== "ArrowLeft" &&
          e.key !== "ArrowRight" &&
          e.key !== "Tab" &&
          e.key !== "Enter"
        ) {
          e.preventDefault();
        }
      }}
      {...rest}
    />
  );
};
