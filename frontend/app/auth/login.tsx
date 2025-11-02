import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ActivityIndicator, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';

type Props = {
  navigation?: any; // replace with proper typing if you use a typed navigator
};

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const emailIsValid = (value: string) => {
    return /^\S+@\S+\.\S+$/.test(value);
  };

  const validateForm = () => {
    if (!email) return 'Please enter your email.';
    if (!emailIsValid(email)) return 'Please enter a valid email address.';
    if (!password) return 'Please enter your password.';
    if (password.length < 6) return 'Password must be at least 6 characters.';
    return null;
  };

//   Mock sign in call 
  const mockSignIn = async (email: string, password: string) => {
    return new Promise<{ success: boolean; token?: string; message?: string }>((resolve) => {
      setTimeout(() => {
        if (email.toLowerCase() === 'test@spine.com' && password === 'password') {
          resolve({ success: true, token: 'fake-jwt-token' });
        } else {
          resolve({ success: false, message: 'Invalid credentials' });
        }
      }, 1000);
    });
  };

  const handleLogin = async () => {
    setError(null);
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const result = await mockSignIn(email.trim(), password);
      if (result.success) {
        // Example: persist token securely (uncomment SecureStore import above if you use it)
        // await SecureStore.setItemAsync('spine_token', result.token || '');

        // Navigate to app's main screen. Adjust route name as needed.
        if (navigation && navigation.replace) {
          navigation.replace('Home');
        } else {
          Alert.alert('Success', 'Logged in (mock).');
        }
      } else {
        setError(result.message || 'Login failed');
      }
    } catch (e) {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    // Navigate to a ForgotPassword screen or show a modal
    if (navigation && navigation.navigate) navigation.navigate('ForgotPassword');
    else Alert.alert('Forgot password', 'Implement forgot password flow.');
  };

  const handleSignup = () => {
    if (navigation && navigation.navigate) navigation.navigate('Signup');
    else Alert.alert('Sign up', 'Implement sign up flow.');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>SpineTracker</Text>
        <Text style={styles.subtitle}>Log in to your account</Text>

        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          style={styles.input}
          editable={!loading}
        />

        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          textContentType="password"
          style={styles.input}
          editable={!loading}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={[styles.button, loading ? styles.buttonDisabled : null]}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? <ActivityIndicator /> : <Text style={styles.buttonText}>Sign in</Text>}
        </TouchableOpacity>

        <View style={styles.row}>
          <TouchableOpacity onPress={handleForgotPassword} disabled={loading}>
            <Text style={styles.linkText}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignup} disabled={loading}>
            <Text style={styles.linkText}>Create account</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerNote}>
          <Text style={styles.smallText}>Tip: use test@spine.com / password to demo the mock sign-in.</Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// --- OAuth Handlers ---
  const handleGoogleLogin = () => {
    Alert.alert('Google Login', 'Implement Google OAuth flow here.');
  };

  const handleAppleLogin = () => {
    Alert.alert('Apple Login', 'Implement Apple OAuth flow here.');
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f6f7fb',
  },
  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 18,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e6e9ef',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2b6ed5',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
    marginTop: 6,
  },
  buttonDisabled: {
    opacity: 0.7,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
  row: {
    marginTop: 14,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  linkText: {
    color: '#2b6ed5',
    fontWeight: '500',
  },
  smallText: {
    fontSize: 12,
    color: '#888',
  },
  footerNote: {
    marginTop: 16,
    alignItems: 'center',
  },
  errorText: {
    color: '#b00020',
    marginBottom: 8,
  },
});
