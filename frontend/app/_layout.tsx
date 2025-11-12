import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log('1. Component rendered, isLoading:', isLoading, 'isLoggedIn:', isLoggedIn);

  useEffect(() => {
    console.log('2. useEffect running');
    // Simulate checking local storage
    setTimeout(() => {
      console.log('3. Timer callback - about to set states');
      setIsLoggedIn(false);
      setIsLoading(false);
      console.log('4. States should be updated');
    }, 1000);
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
    <Stack>
      <Stack.Protected guard={isLoggedIn}>
        <Stack.Screen name="(protected" />
      </Stack.Protected>

      <Stack.Protected guard={!isLoggedIn}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="forgot-password" />
      </Stack.Protected>
    </Stack>
  );
}
