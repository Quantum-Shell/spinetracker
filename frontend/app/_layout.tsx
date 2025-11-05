import { Stack } from "expo-router";

export default function RootLayout() {
  const isSignedIn = false; // temporary placeholder

  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <Stack.Screen name="(tabs)" />
      ) : (
        <Stack.Screen name="auth" />
      )}
    </Stack>
  );
}
