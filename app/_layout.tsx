import { Tabs } from "expo-router";
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { CartProvider } from "./context/cardContext";
import Toast from "react-native-toast-message";
import { AddIcon, Icon } from "@/components/ui/icon";

export default function RootLayout() {
  return (
    <CartProvider>
      <GluestackUIProvider>
        <Toast />
        <Tabs>
          <Tabs.Screen
            name="index" // This corresponds to app/index.tsx
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
            name="cart" // This corresponds to app/cart.tsx
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

          <Tabs.Screen
            name="rijan" // This corresponds to app/cart.tsx
            options={{
              title: "Rijan",
              tabBarIcon: () => (
                <Icon
                  as={AddIcon}
                  className="text-typography-500 m-2 w-5 h-4"
                />
              ),
            }}
          />
          <Tabs.Screen
            name="product/[productId]" // Dynamic route
            options={{
              tabBarButton: () => null, // Hides this route from the Tab bar
              headerShown: false, // Optional: Hides the header if needed
            }}
          />
        </Tabs>
      </GluestackUIProvider>
    </CartProvider>
  );
}
