import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>SpineTracker</Text>
      
      <TextInput 
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
      />
      <TextInput 
        style={styles.input}
        placeholder="Password"
        secureTextEntry
      />
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <View style={styles.links}>
        <Link href="/auth/signup">Create Account</Link>
        <Link href="/auth/forgot-password">Forgot Password?</Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  links: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});