import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function LoginScreen() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <View style={styles.background}>
      <View style={styles.card}>
        <Text style={styles.title}>SpineTracker</Text>

        <TextInput 
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          autoCapitalize="none"
        />

        <TextInput 
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#888"
          secureTextEntry
        />

        <View style={styles.row}>
          <TouchableOpacity 
            style={styles.checkboxContainer} 
            onPress={() => setRememberMe(!rememberMe)}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]} />
            <Text style={styles.rememberText}>Remember me</Text>
          </TouchableOpacity>

          <Link href="/auth/forgot-password">
            <Text style={styles.linkText}>Forgot Password?</Text>
          </Link>
        </View>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>or</Text>
          <View style={styles.divider} />
        </View>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Google</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Continue with Apple</Text>
        </TouchableOpacity>

        <View style={{ marginTop: 20 }}>
          <Text style={styles.signupText}>
            Don’t have an account?{' '}
            <Link href="/auth/signup">
              <Text style={styles.signupLink}>Sign up</Text>
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
    backgroundColor: "#FAF9EE", // cream background
    padding: 20,
  },

  card: {
    width: "90%",
    maxWidth: 380,
    backgroundColor: "white",
    padding: 25,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#DCCFC0", // soft beige border
    shadowColor: "#A2AF9B",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 3,
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
    borderColor: "#DCCFC0", // beige border
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },

  rememberText: {
    fontSize: 14,
    color: "#6F726B",
  },

  linkText: {
    color: "#A2AF9B", // muted green/gray accent
    fontWeight: "600",
  },

  loginButton: {
    backgroundColor: "#A2AF9B", // main button color
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

  dividerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },

  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#EEEEEE",
  },

  dividerText: {
    marginHorizontal: 10,
    color: "#777",
  },

  socialButton: {
    borderWidth: 1,
    borderColor: "#DCCFC0",
    backgroundColor: "#FFFFFF",
    padding: 14,
    borderRadius: 8,
    marginBottom: 10,
  },

  socialButtonText: {
    textAlign: "center",
    color: "#555",
    fontWeight: "500",
  },

  signupText: {
    textAlign: "center",
    fontSize: 14,
    color: "#6F726B",
  },

  signupLink: {
    color: "#A2AF9B",
    fontWeight: "700",
  },
  checkboxContainer: {
  flexDirection: "row",
  alignItems: "center",
},

checkbox: {
  width: 20,
  height: 20,
  borderRadius: 10, // makes it a circle
  borderWidth: 2,
  borderColor: "#A2AF9B",
  marginRight: 8,
  backgroundColor: "transparent",
},

checkboxChecked: {
  backgroundColor: "#A2AF9B",
},

});
