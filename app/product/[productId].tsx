import React, { useState, useContext } from "react";
import { Text } from "@/components/ui/text";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "../../assets/product.json";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";
import { CartContext } from "../context/cardContext";
import { Toast, useToast } from "@/components/ui/toast";

export default function ProductDetailsScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = products.find((p) => p.id == Number(productId));
  const { addToCart   } = useContext(CartContext);
  const toast = useToast(); 

  if (!product) {
    return <Text>Product not found.</Text>;
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      image: product.image
    });

    // Show toast when item is added to cart
    toast.show({
      placement: "top",
      duration: 3000,
      render: () => (
        <Toast variant="solid">
          <Text>{`${product.name} has been added to your cart!`}</Text>
        </Toast>
      ),
    });
  };

  return (
    <Box className="flex-1 item-centre p-8">
      <Stack.Screen options={{ title: product.name }} />

      <Card className="p-5 rounded-lg max-w-[360px] m-3">
        <Image
          source={{ uri: product.image }}
          className="mb-6 h-[240px] w-full rounded-md"
          alt="image"
          resizeMode="contain"
        />
        <Text className="text-sm font-normal mb-2 text-typography-700">
          {product.name}
        </Text>
        <VStack className="mb-6">
          <Heading size="md" className="mb-4">
            {product.price}
          </Heading>
          <Text size="sm">{product.description}</Text>
        </VStack>
        <Box className="flex-col sm:flex-row">
          <Button
            className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1"
            onPress={handleAddToCart}
          >
            <ButtonText size="sm">Add to cart</ButtonText>
          </Button>
          <Button
            variant="outline"
            className="px-4 py-2 border-outline-300 sm:flex-1"
          >
            <ButtonText size="sm" className="text-typography-600">
              Wishlist
            </ButtonText>
          </Button>
        </Box>
      </Card>
    </Box>
  );
}
