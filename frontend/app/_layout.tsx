import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function RootLayout() {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedIn, setIsSignedIn] = useState(false);

  console.log('1. Component rendered, isLoading:', isLoading, 'isSignedIn:', isSignedIn);

  useEffect(() => {
    console.log('2. useEffect running');
    // Simulate checking local storage
    setTimeout(() => {
      console.log('3. Timer callback - about to set states');
      setIsSignedIn(false);
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

  console.log('5b. Rendering main layout, isSignedIn:', isSignedIn);
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <Stack.Screen 
          name="(tabs)"
          options={{
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />
      ) : (
        <Stack.Screen 
          name="auth"
          options={{
            headerBackVisible: false,
            gestureEnabled: false
          }}
        />
      )}
    </Stack>
  );
}