// SignInScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signInError, setSignInError] = useState(null);

  const handleSignIn = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        // Handle empty input, e.g., show an error message
        setSignInError('Please enter your email and password.');
        return;
      }

      await auth().signInWithEmailAndPassword(email, password);
      // Successful sign-in, you can navigate to the next screen
      navigation.navigate('ItemList');
    } catch (error) {
      // Handle sign-in error
      const errorMessage = error.message || 'An error occurred.';
      setSignInError(errorMessage);
      console.error('Sign-in error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
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
      {signInError && <Text style={styles.error}>{signInError}</Text>}
      <Button title="Sign In" onPress={handleSignIn} />
      <Button
        title="Forgot Password?"
        onPress={() => navigation.navigate('PasswordReset')}
      />
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

export default SignInScreen;
