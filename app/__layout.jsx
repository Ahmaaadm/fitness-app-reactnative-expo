import { View, Text } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import { LogBox } from 'react-native';

export default function __layout() {
  LogBox.ignoreLogs([
    '[Reanimated] Reading from `value` during component render.',
]);
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="exercices"
        options={{
          presentation: "fullScreenModal",
        }}
      />
      <Stack.Screen
        name="exerciceDetails"
        options={{
          presentation: "modal",
        }}
      />
    </Stack>
  );
}
