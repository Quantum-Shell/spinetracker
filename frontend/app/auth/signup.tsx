import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function SignUpScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <View style={styles.background}>
      <View style={styles.card}>

        {/* Back to Login */}
        <Link href="/auth">
          <Text style={styles.backLink}>← Back to Login</Text>
        </Link>

        <Text style={styles.title}>Create Account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#888"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.loginText}>
            Already have an account?{' '}
            <Link href="/auth">
              <Text style={styles.loginLink}>Log in</Text>
            </Link>
          </Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAF9EE",
    padding: 20,
  },

  card: {
    width: "90%",
    maxWidth: 380,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DCCFC0",
    shadowColor: "#A2AF9B",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
  },

  backLink: {
    color: "#A2AF9B",
    fontWeight: "600",
    marginBottom: 10,
    fontSize: 14,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 25,
    color: "#4B4B4B",
  },

  input: {
    borderWidth: 1,
    borderColor: "#DCCFC0",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  signupButton: {
    backgroundColor: "#A2AF9B",
    padding: 15,
    borderRadius: 8,
    marginTop: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
  },

  loginText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6F726B",
  },

  loginLink: {
    color: "#A2AF9B",
    fontWeight: "700",
  },
});
