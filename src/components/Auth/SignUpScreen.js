// SignUpScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpError, setSignUpError] = useState(null);

  const handleSignUp = async () => {
    try {
      if (email.trim() === '' || password.trim() === '' || confirmPassword.trim() === '') {
        // Handle empty input, e.g., show an error message
        setSignUpError('Please enter your email, password, and confirm password.');
        return;
      }

      if (password !== confirmPassword) {
        // Handle password mismatch
        setSignUpError('Passwords do not match.');
        return;
      }

      await auth().createUserWithEmailAndPassword(email, password);
      // Successful sign-up, you can navigate to the next screen
      navigation.navigate('ItemList');
    } catch (error) {
      // Handle sign-up error
      const errorMessage = error.message || 'An error occurred.';
      setSignUpError(errorMessage);
      console.error('Sign-up error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        secureTextEntry
      />
      {signUpError && <Text style={styles.error}>{signUpError}</Text>}
      <Button title="Sign Up" onPress={handleSignUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  error: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
});

export default SignUpScreen;
