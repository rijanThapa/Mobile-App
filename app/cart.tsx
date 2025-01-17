import React, { useContext } from "react";
import { FlatList, View } from "react-native";
import { CartContext } from "./context/cardContext";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import CartItem from "@/components/ui/CartItem";

const CartScreen = () => {
  const { cart } = useContext(CartContext);
  if (cart?.length === 0) {
    return (
      <Box className="flex-1 jusify-center item-center p-4">
        <Text className="text-lg">Your cart is empty</Text>
      </Box>
    );
  }
  console.log({cart})
  return (
    <FlatList
      data={cart}
      keyExtractor={(item) => item?.id}
      renderItem={({ item }) => (
        <CartItem
          key={item.id}
          id={item.id}
          imageUrl = {item?.image}
          name={item.name}
          price={item.price}
          quantity={item.quantity}
        />
      )}
    />
  );
};

export default CartScreen;
