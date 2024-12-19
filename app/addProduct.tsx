import React, { useState } from "react";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Button,
  Text,
  Image,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  View,
} from "react-native";
import { Input, InputField } from "@/components/ui/input";
import { Box } from "@/components/ui/box";
import { Textarea, TextareaInput } from "@/components/ui/textarea";
import * as ImagePicker from "expo-image-picker";

// Define your form data type
interface FormData {
  p_name: string;
  price: string;
  desc: string;
  quantity: string | number;
}

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
  const [image, setImage] = useState<string | null>(null);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      p_name: "",
      price: "",
      desc: "",
      quantity: "",
    },
  });

  // Function to pick image
  const pickImage = async () => {
    // Request for permission to access the camera roll
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission required",
        "We need permission to access your media library."
      );
      return;
    }

    // Open the image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const onPressSend = (data: FormData) => {
    console.log(data);
    console.log(image); // Log image URI
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView>
        <Box className="m-4">
          <Box className="mb-4">
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
            {errors.p_name && (
              <Text style={{ color: "red" }}>{errors.p_name.message}</Text>
            )}

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
                    keyboardType="numeric"
                  />
                </Input>
              )}
              name="price"
            />
            {errors.price && (
              <Text style={{ color: "red" }}>{errors.price.message}</Text>
            )}

            <Text className="mt-2">Description</Text>
            <Controller
              control={control}
              render={({ field: { onChange, value } }) => (
                <Textarea size="md">
                  <TextareaInput
                    placeholder="Product description"
                    onChangeText={onChange}
                    value={value}
                  />
                </Textarea>
              )}
              name="desc"
            />
            {errors.desc && (
              <Text style={{ color: "red" }}>{errors.desc.message}</Text>
            )}

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
            {errors.quantity && (
              <Text style={{ color: "red" }}>{errors.quantity.message}</Text>
            )}

            {/* Image Picker Section */}
            <View style={{ marginTop: 20 }}>
              <Button title="Pick an image" onPress={pickImage} />
              {image && (
                <View style={{ marginTop: 10 }}>
                  <Image
                    source={{ uri: image }}
                    style={{ width: 200, height: 200, borderRadius: 10 }}
                  />
                </View>
              )}
            </View>
          </Box>

          <Button
            title="Submit"
            onPress={handleSubmit(onPressSend)}
            accessibilityLabel="Submit the form"
          />
        </Box>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default FormComponent;
