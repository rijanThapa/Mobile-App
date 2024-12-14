import { Tabs } from "expo-router";
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { CartProvider } from "./context/cardContext";
import Toast from "react-native-toast-message";
import { AddIcon, Icon } from "@/components/ui/icon";
import { MaterialIcons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <CartProvider>
      <GluestackUIProvider>
        <Toast />
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: "blue",
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="cart"
            options={{
              title: "Cart",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="shopping-cart" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="addProduct"
            options={{
              title: "Add Product",
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="add" size={24} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="product/[productId]"
            options={{
              tabBarButton: () => null,
              headerShown: false,
            }}
          />
        </Tabs>
      </GluestackUIProvider>
    </CartProvider>
  );
}
