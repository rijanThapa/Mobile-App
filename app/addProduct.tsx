import React from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { View, Button, Text } from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Textarea, TextareaInput } from "@/components/ui/textarea";

// Define the validation schema
const schema = yup.object().shape({
  p_name: yup.string().required("Product name is required"),
  price: yup.string().required("Price is required"),
  desc: yup.string().required("Product description is required"),
  quantity: yup
    .number()
    .positive("Quantity must be a positive number")
    .required("Quantity is required"),
});

const FormComponent = () => {
  // Initialize the form using react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      p_name: "",
      price: "",
      desc: "",
      quantity: "", // Add default value for quantity
    },
  });

  // Handle form submission
  const onPressSend = (formData: any) => {
    console.log(formData);
  };

  return (
    <Box className="m-2">
      <Box className="mb-4">
        {/* Product name input */}
        <Text>Product Name</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input variant="outline" size="md" className="mt-2">
              <InputField
                style={{ height: 50 }}
                placeholder="Enter the product name"
                value={value}
                onChangeText={onChange}
              />
            </Input>
          )}
          name="p_name"
        />
        {errors.p_name && <Text>{errors.p_name.message}</Text>}

        {/* Price input */}
        <Text className="mt-2">Price</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input className="mt-2" variant="outline" size="md">
              <InputField
                style={{ height: 50 }}
                placeholder="Enter the product price"
                value={value}
                onChangeText={onChange}
              />
            </Input>
          )}
          name="price"
        />
        {errors.price && <Text>{errors.price.message}</Text>}

        {/* Product description input */}
        <Text className="mt-2">Description</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Textarea size="md" className="">
              <TextareaInput
                placeholder="Product description"
                onChangeText={onChange}
              />
            </Textarea>
          )}
          name="desc"
        />
        {errors.desc && <Text>{errors.desc.message}</Text>}

        {/* Quantity input */}
        <Text className="mt-2">Quantity</Text>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input className="mt-2" variant="outline" size="md">
              <InputField
                style={{ height: 50 }}
                placeholder="Enter product quantity"
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
              />
            </Input>
          )}
          name="quantity"
        />
        {errors.quantity && <Text>{errors.quantity.message}</Text>}
      </Box>

      {/* Submit button */}
      <Button title="Submit" onPress={handleSubmit(onPressSend)} />
    </Box>
  );
};

export default FormComponent;
