import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { VStack } from "@/components/ui/vstack";
import { Text } from "@/components/ui/text";
import { Heading } from "@/components/ui/heading";
import { Box } from "@/components/ui/box";
import { Button, ButtonText } from "./ui/button";
import { Link } from "expo-router";
import { Pressable } from "react-native";

export default function ProductListItem({ product }: any) {
  return (
    <Link href={`/product/${product.id}`} asChild>
      <Pressable className="flex-1">
        <Card className="p-5 rounded-lg max-w-[300px]  flex-1">
          <Image
            source={{
              uri: product.image,
            }}
            className="mb-6 h-[240px] w-full rounded-md"
            alt={product.name}
            resizeMode="contain"
          />
          <Text className="text-sm font-normal mb-2 text-typography-700">
            {product.name}
          </Text>
          <VStack className="mb-6">
            <Heading size="md" className="mb-4">
              {product.price}
            </Heading>
          </VStack>
        </Card>
      </Pressable>
    </Link>
  );
}
