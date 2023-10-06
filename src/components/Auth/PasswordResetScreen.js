// PasswordResetScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { auth } from '@react-native-firebase/auth';

const PasswordResetScreen = () => {
  const [email, setEmail] = useState('');
  const [resetStatus, setResetStatus] = useState(null);

  const handlePasswordReset = () => {
    if (email.trim() === '') {
      // Handle empty input, e.g., show an error message
      setResetStatus('Please enter your email.');
      return;
    }

    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        // Password reset email sent successfully
        setResetStatus('Password reset email sent. Check your inbox.');
      })
      .catch((error) => {
        // Handle password reset error
        const errorMessage = error.message || 'An error occurred.';
        setResetStatus(errorMessage);
        console.error('Password reset error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Reset Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      {resetStatus && <Text style={styles.status}>{resetStatus}</Text>}
      <Button title="Reset Password" onPress={handlePasswordReset} />
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
  status: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
  },
});

export default PasswordResetScreen;
