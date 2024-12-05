import React from "react";
import { FlatList, Text, View } from "react-native";
import products from "../assets/product.json";
import { Button, ButtonText } from "@/components/ui/button";
import ProductListItem from "@/components/ProductListItems";
const HomeScreen = () => {
  console.log("re-render");
  return (
    <View>
      <FlatList
        data={products}
        numColumns={2}
        contentContainerClassName="gap-2"
        columnWrapperClassName="gap-2"
        renderItem={({ item }: any) => <ProductListItem product={item} />}
      />
    </View>
  );
};

export default HomeScreen;
