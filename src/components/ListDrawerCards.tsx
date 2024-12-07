import {
  Checkbox,
  HStack,
  Input,
  StackProps,
  Text,
  Textarea,
  useToast,
  VStack,
} from "@chakra-ui/react";
import { DrawerCard } from "./DrawerCard";
import { NumberInput } from "./NumberInput";
import { PrimaryButton } from "./PrimaryButton";
import { SelectInput } from "./SelectInput";

interface Props extends StackProps {
  isCopy: () => void;
}

export const ListDrawerCards = ({ isCopy, ...rest }: Props) => {
  const toast = useToast();

  const handleCopyLink = (value: string) => {
    isCopy();

    navigator.clipboard
      .writeText(value)
      .then(() => {
        toast({
          title: `Link berhasil disalin`,
          description: "Account number copied successfully",
          status: "success",
          isClosable: true,
          containerStyle: {
            fontFamily: "'Newsreader', serif",
          },
        });
      })
      .catch(() => {
        toast({
          title: `Link gagal disalin`,
          position: "bottom",
          status: "error",
          isClosable: true,
          containerStyle: {
            fontFamily: "'Newsreader', serif",
          },
        });
      });
  };

  return (
    <>
      <DrawerCard
        title="Bank Transfer"
        subtitle="01234567"
        description="Tifanny Jared"
        imageSrc="/images/logo-bri.png"
        onClickBtn={() => handleCopyLink("01234567")}
      />

      <DrawerCard
        title="Gift"
        subtitle="Tifanny & Jared"
        description="Jalan Road 700, Kelurahan, Kecamatan, Kota."
        onClickBtn={() =>
          handleCopyLink("Jalan Road 700, Kelurahan, Kecamatan, Kota.")
        }
      />

      <DrawerCard title="Confirmation" p={10} align={"start"}>
        <Input
          autoComplete="off"
          placeholder="Name"
          backgroundColor={"#F9F7F3"}
        />

        <HStack w={"100%"} gap={0} mt={6}>
          <SelectInput maxW={"100px"} />
          <NumberInput name="phone" backgroundColor={"#F9F7F3"} />
        </HStack>

        <Text fontFamily={"newsreader"} mt={6} fontSize={["sm", null, "md"]}>
          Wedding Gift Type
        </Text>

        <VStack gap={0} align={"start"}>
          <Checkbox
            size="md"
            borderColor={"#CDC0B1"}
            fontFamily={"'newsreader', serif"}
          >
            Bank Transfer
          </Checkbox>

          <Checkbox
            size="md"
            borderColor={"#CDC0B1"}
            fontFamily={"'newsreader', serif"}
          >
            Gift
          </Checkbox>
        </VStack>

        <Textarea
          autoComplete="off"
          placeholder="Add notes..."
          mt={6}
          borderRadius={0}
          borderColor={"black"}
          backgroundColor={"#F9F7F3"}
          _focus={{
            borderColor: "black",
            boxShadow: "0 0 0 1px var(--chakra-colors-black)",
          }}
          _hover={{
            borderColor: "black",
            boxShadow: "0 0 0 1px var(--chakra-colors-black)",
          }}
        />

        <VStack alignSelf={"end"}>
          <PrimaryButton
            as={"i"}
            w={["140px", null, "180px"]}
            mt={4}
            onClick={() =>
              toast({
                title: "Oops!",
                description:
                  "Something wrong happened. Please try again later or refresh your browser!",
                status: "error",
                isClosable: true,
                containerStyle: {
                  fontFamily: "'Newsreader', serif",
                },
              })
            }
          >
            Send Confirmation
          </PrimaryButton>
        </VStack>
      </DrawerCard>
    </>
  );
};
