// AddItemScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddItemScreen = ({ navigation }) => {
  const [newItem, setNewItem] = useState('');
  const [addItemError, setAddItemError] = useState(null);

  const handleAddItem = () => {
    if (newItem.trim() === '') {
      // Handle empty input, e.g., show an error message
      setAddItemError('Please enter an item name.');
      return;
    }

    // Implement logic to add the new item to your list here
    // For example, you can dispatch an action or make an API call

    // After successfully adding the item, you can navigate back to the Item List screen
    navigation.navigate('ItemList', { newItem });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Item Name"
        value={newItem}
        onChangeText={(text) => setNewItem(text)}
      />
      {addItemError && <Text style={styles.error}>{addItemError}</Text>}
      <Button title="Add Item" onPress={handleAddItem} />
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

export default AddItemScreen;
