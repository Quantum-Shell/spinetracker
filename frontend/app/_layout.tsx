import { Stack, usePathname } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 👇 Add this here
  const pathname = usePathname();
  console.log("🔍 Current route:", pathname);

  useEffect(() => {
    console.log('2. useEffect running');
    setIsLoggedIn(false);
    setIsLoading(false);
    console.log('4. States should be updated');
  }, []);

  if (isLoading) {
    console.log('5a. Rendering loading screen');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  console.log('5b. Rendering main layout, isLoggedIn:', isLoggedIn);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(protected)" />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="auth" />
      </Stack.Protected>
    </Stack>
  );
}