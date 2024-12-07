import { Image, StackProps, Text, VStack } from "@chakra-ui/react";
import { PrimaryButton } from "./PrimaryButton";

interface Props extends StackProps {
  title?: string;
  subtitle?: string;
  description?: string;
  imageSrc?: string;
  children?: any;
  onClickBtn?: () => void;
}

export const DrawerCard = ({
  title,
  subtitle,
  description,
  imageSrc,
  onClickBtn,
  children,
  ...rest
}: Props) => {
  return (
    <VStack className="drawer-card" w={"100%"} gap={0}>
      <VStack
        w={"100%"}
        p={4}
        bg={"#F9F7F3"}
        align={"stretch"}
        borderBottomWidth={"1px"}
        borderBottomColor={"black"}
        borderTopWidth={"1px"}
        borderTopColor={"black"}
        {...rest}
      >
        <Text
          textAlign={"start"}
          variant={"butler"}
          fontWeight={"medium"}
          fontSize={["xl", null, "2xl"]}
        >
          {title}
        </Text>
      </VStack>

      <VStack
        className="content-drawer-card"
        w={"100%"}
        p={4}
        gap={0}
        bg={"white"}
        {...rest}
      >
        {title && subtitle && description && onClickBtn && (
          <>
            {imageSrc && (
              <Image
                src={imageSrc}
                w={"100px"}
                objectFit={"contain"}
                objectPosition={"center"}
              />
            )}

            <Text
              mt={1}
              variant={"newsreader"}
              fontSize={["md", null, "lg"]}
              color={"#CDC0B1"}
            >
              {subtitle}
            </Text>
            <Text
              variant={"newsreader"}
              fontSize={["md", null, "lg"]}
              color={"black"}
            >
              {description}
            </Text>
            <PrimaryButton as={"i"} mt={4} onClick={onClickBtn}>
              Copy
            </PrimaryButton>
          </>
        )}

        {children}
      </VStack>
    </VStack>
  );
};
