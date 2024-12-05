import { Stack } from "expo-router";
import React from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
export default function RootLayout() {
  return (
    <GluestackUIProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Shop" }} />
        <Stack.Screen
          name="product/[productId]"
          options={{ title: "Product" }}
        />
      </Stack>
    </GluestackUIProvider>
  );
}
