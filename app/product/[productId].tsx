import { Text } from "@/components/ui/text";
import { Stack, useLocalSearchParams } from "expo-router";
import products from "../../assets/product.json"; // Fixed typo
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "@/components/ui/button";

export default function ProductDetailsScreen() {
  const { productId } = useLocalSearchParams<{ productId: string }>();
  const product = products.find((p) => p.id == Number(productId));

  if (!product) {
    return <Text>Product not found.</Text>; // Handle product not found
  }

  return (
    <Box className="flex-1 item-centre p-8">
      <Stack.Screen options={{ title: product.name }} />
      <Card className="p-5 rounded-lg max-w-[360px] m-3">
        <Image
          source={{
            uri: product.image,
          }}
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
          <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
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
