// ItemListScreen.js

import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const ItemListScreen = ({ route, navigation }) => {
  const [items, setItems] = useState([]);
  const { newItem } = route.params || {};

  // Use useEffect to update the item list when a new item is added
  useEffect(() => {
    if (newItem) {
      setItems((prevItems) => [...prevItems, newItem]);
    }
  }, [newItem]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item List</Text>
      {items.length === 0 ? (
        <Text>No items added yet.</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Text>{item}</Text>
            </View>
          )}
        />
      )}
      <Button title="Add Item" onPress={() => navigation.navigate('AddItem')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export default ItemListScreen;
