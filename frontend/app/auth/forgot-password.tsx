import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function ForgotPasswordScreen() {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.background}>
      <View style={styles.card}>

        {/* Back to Login */}
        <Link href="/auth">
          <Text style={styles.backLink}>← Back to Login</Text>
        </Link>

        <Text style={styles.title}>Reset Password</Text>

        <Text style={styles.infoText}>
          Enter your email and we’ll send you a link to reset your password.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity style={styles.resetButton}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

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
    marginBottom: 15,
    color: "#4B4B4B",
  },

  infoText: {
    textAlign: "center",
    color: "#6F726B",
    marginBottom: 20,
    fontSize: 14,
    lineHeight: 18,
  },

  input: {
    borderWidth: 1,
    borderColor: "#DCCFC0",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },

  resetButton: {
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
});
