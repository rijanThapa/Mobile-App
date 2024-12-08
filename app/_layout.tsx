import { Tabs } from "expo-router";
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { CartProvider } from "./context/cardContext";
import Toast from "react-native-toast-message";
import { AddIcon, Icon } from "@/components/ui/icon";
// Import the Icon component

export default function RootLayout() {
  return (
    <CartProvider>
      <GluestackUIProvider>
        <Toast />
        <Tabs>
          <Tabs.Screen
            name="index"
            options={{
              title: "Home",
              tabBarIcon: () => (
                <Icon
                  as={AddIcon}
                  className="text-typography-500 m-2 w-5 h-4"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="cart"
            options={{
              title: "Cart",
              tabBarIcon: () => (
                <Icon
                  as={AddIcon}
                  className="text-typography-500 m-2 w-5 h-4"
                />
              ),
            }}
          />
        </Tabs>
      </GluestackUIProvider>
    </CartProvider>
  );
}
