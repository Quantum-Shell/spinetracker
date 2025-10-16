import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Touchable } from 'react-native';

//  React Navigation
interface LoginScreenProps {
    navigation?: {
        navigate: (screen: string) => void; 
    };
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const handleLogin = () => {
        // TODO: Replace with backend login API Call
        if (!email || !password) {
            Alert.alert('Missing info', 'Please enter both email and password.')
            return; 
        } 

        console.log('Logging in with:', email, password); 
        //  Example placeholder
        // Change message to match time of day 
        // Alert.alert('Login', `Welcome back, ${username}`)
    };

    const handleJoin = () => {
        // Navigation to signup if using react native navigation
        navigation?.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>SpineTracker</Text>

            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autocapitolize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                />

                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                    <Text style={styles.loginText}>Login</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={handleJoin}>
                    <Text style={styles.joinText}>Join</Text>
                </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fff',
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 24, 
    },
    title: {
        fontSize: 32, 
        fontWeight: 'bold',
        marginBottom: 40, 
        color: '#222', 
    },
    input: {
        width: '100%',
        borderWidth: 1, 
        borderColor: '#ccc',
        borderRadius: 10, 
        padding: 12, 
        marginBottom: 16, 
        fontSize: 16, 
    }, 
    loginButton: {
        width: '100%', 
        backgroundColor: '#4CAF50',
        padding: 14, 
        borderRadius: 10, 
        alignItems: 'center', 
        marginBottom: 12, 
    },
    joinText: {
        color: '#4CAF50', 
        fontSize: 16, 
        fontWeight: '500',
    },
});