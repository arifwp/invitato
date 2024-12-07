import { Select, SelectProps } from "@chakra-ui/react";
import { countryCode } from "../utils/constants";

interface Props extends SelectProps {}

export const SelectInput = ({ ...rest }: Props) => {
  return (
    <Select
      placeholder={""}
      bg={"#F9F7F3"}
      defaultValue={countryCode[3].dial_code}
      fontFamily={"'Newsreader', 'serif"}
      borderColor={"black"}
      sx={{
        "> option": {
          background: "#F9F7F3",
        },
      }}
      {...rest}
    >
      {countryCode?.map((item, i) => (
        <option key={i} value={item.dial_code}>
          {item.dial_code}
        </option>
      ))}
    </Select>
  );
};
