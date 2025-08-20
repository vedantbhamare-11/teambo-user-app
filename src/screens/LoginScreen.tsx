import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation/types';

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const handleLogin = () => {
    // Validate login here
    navigation.navigate('Home');
  };
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#f6f7fb' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <View style={styles.container}>
        <Text variant="headlineMedium" style={styles.header}>
          Welcome to Teambo
        </Text>
        <Text style={styles.subheader}>Sign in to continue</Text>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          style={styles.input}
          left={<TextInput.Icon icon="email" />}
          theme={{ roundness: 16 }}
        />
        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
          left={<TextInput.Icon icon="lock" />}
          theme={{ roundness: 16 }}
        />
        <Button
          mode="contained"
          onPress={handleLogin}
          style={styles.button}
          contentStyle={styles.buttonContent}
          labelStyle={styles.buttonLabel}
        >
          Login
        </Button>
        <Text style={styles.link}>Forgot password?</Text>
      </View>
    </KeyboardAvoidingView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 28,
    alignItems: 'stretch',
    backgroundColor: '#f6f7fb',
  },
  header: {
    marginBottom: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#22223b',
  },
  subheader: {
    marginBottom: 20,
    textAlign: 'center',
    color: '#4a4e69',
    fontSize: 16,
  },
  input: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 16,        // Extra curvature for the input box
    overflow: 'hidden',      // Ensures the rounded corners display properly
  },
  button: {
    marginTop: 16,
    borderRadius: 24,        // Extra curvature for the button
    backgroundColor: '#6c63ff',
    elevation: 2,
    shadowColor: '#6c63ff',
  },
  buttonContent: {
    paddingVertical: 12,
    borderRadius: 24,
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  link: {
    textAlign: 'center',
    marginTop: 20,
    color: '#6c63ff',
    textDecorationLine: 'underline',
    fontSize: 14,
    fontWeight: '500',
  },
});

export default LoginScreen;
