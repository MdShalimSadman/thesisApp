import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity } from 'react-native';

const FarmerProfile = ({ route }) => {
  const { name, products } = route.params;

  const [cart, setCart] = useState({}); // State to track selected quantities

  const handleQuantityChange = (product, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [product]: quantity,
    }));
  };

  const handleAddToCart = () => {
    // Implement your logic for handling the "Add to Cart" action
    console.log('Cart:', cart);
    // You can further implement the logic to send the cart data to a server or perform other actions.
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item}</Text>
      <TextInput
        style={styles.quantityInput}
        placeholder="qty (kg)"
        keyboardType="numeric"
        placeholderTextColor="grey"
        value={cart[item] ? cart[item].toString() : ''}
        onChangeText={(text) => handleQuantityChange(item, text)}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{name}'s Products</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item}
        renderItem={renderProductItem}
      />
      <TouchableOpacity onPress={handleAddToCart}>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>Add to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 16,
  },
  productItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  quantityInput: {
    width: 80,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    paddingLeft: 8,
    color: 'black',
  },
  addToCartButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  addToCartButtonText: {
    color: 'white',
    fontSize: 18,
  },
});

export default FarmerProfile;
