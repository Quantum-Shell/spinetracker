// app/auth/_layout.tsx
import { Stack } from "expo-router";
import { View, Text } from "react-native";

export default function AuthLayout() {
  return (
    <>
      <Stack screenOptions={{ headerShown: false }} />
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "white" }}>Auth Layout is loading!</Text>
      </View>
    </>
  );
}
