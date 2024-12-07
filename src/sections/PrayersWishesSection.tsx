import {
  Button,
  FormControl,
  FormErrorMessage,
  Input,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as yup from "yup";

const initialValues = {
  name: undefined,
  relation: undefined,
  prayers: undefined,
};

export const PrayersWishesSection = () => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: yup.object().shape({
      name: yup.string().required("Name cannot empty"),
      relation: yup.string().required("Relation cannot empty"),
      prayers: yup.string().required("Prayers & wishes cannot empty"),
    }),
    onSubmit: (values) => {
      console.log("asd", values);
    },
  });

  return (
    <VStack className="prayers-section" w={"100%"} p={10} bgColor={"#F9F7F3"}>
      <Text
        variant={"butler"}
        fontSize={["2xl", null, "3xl"]}
        fontWeight={"medium"}
        textAlign={"center"}
      >
        Prayers & Wishes
      </Text>

      <Text
        variant={"newsreader"}
        fontSize={["sm", null, "md"]}
        textAlign={"center"}
        whiteSpace={"normal"}
        wordBreak={"break-word"}
      >
        Please leave your sincere prayers and wishes to us and our family:
      </Text>

      <form
        id="prayerswishesform"
        onSubmit={formik.handleSubmit}
        style={{ width: "100%" }}
      >
        <VStack w={"260px"} justifySelf={"center"} align={"end"}>
          <FormControl
            isInvalid={formik.errors.name && formik.touched.name ? true : false}
          >
            <Input
              autoComplete="off"
              mt={4}
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name || ""}
              placeholder="Name"
              backgroundColor={"white"}
            />
            <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.errors.relation && formik.touched.relation ? true : false
            }
          >
            <Input
              autoComplete="off"
              mt={4}
              name="relation"
              onChange={formik.handleChange}
              value={formik.values.relation || ""}
              placeholder="The Relationship"
              backgroundColor={"white"}
            />

            <FormErrorMessage>{formik.errors.relation}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={
              formik.errors.prayers && formik.touched.prayers ? true : false
            }
          >
            <Textarea
              name="prayers"
              autoComplete="off"
              placeholder="Prayers & Wishes"
              mt={4}
              borderRadius={0}
              onChange={formik.handleChange}
              value={formik.values.prayers || ""}
              fontFamily={"'Newsreader', serif"}
              borderColor={"black"}
              backgroundColor={"white"}
              _focus={{
                borderColor: "black",
                boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              }}
              _hover={{
                borderColor: "black",
                boxShadow: "0 0 0 1px var(--chakra-colors-black)",
              }}
              _placeholder={{
                color: "gray.900",
              }}
            />

            <FormErrorMessage>{formik.errors.prayers}</FormErrorMessage>
          </FormControl>

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
          >
            Submit
          </Button>
        </VStack>
      </form>
    </VStack>
  );
};
