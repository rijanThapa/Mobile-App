// CartItem.tsx (no changes needed from the previous example)
import React, { useContext } from "react";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Button, ButtonText } from "@/components/ui/button";
import {Image} from "@/components/ui/image"
type CartItemProps = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageUrl: string;
};

const CartItem: React.FC<CartItemProps> = ({
  id,
  name,
  imageUrl,
  price,
  quantity,
}) => {
    console.log({ imageUrl })
  return (
    <Box className="flex flex-row justify-between items-center p-4 border-b border-gray-200">
          <Image
              resizeMode="contain"
        source={{ uri: imageUrl }}
        style={{ width: 50, height: 50, borderRadius: 8 }}
      />
      <Box>
        <Text className="text-lg font-bold">{name}</Text>
        <Text className="text-sm text-gray-500">
          Price: ${price.toFixed(2)}
        </Text>
        <Text className="text-sm text-gray-500">Quantity: {quantity}</Text>
      </Box>
      <Button variant="outline">
        <ButtonText size="sm">Remove</ButtonText>
      </Button>
    </Box>
  );
};

export default CartItem;
