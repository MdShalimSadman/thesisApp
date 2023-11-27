import React from 'react';
import { View, Text } from 'react-native';

const CustomerCheckout = ({ route }) => {
  const { farmerName, selectedProducts, totalPrice } = route.params;

  // ... (rest of the code)

  return (
    <View>
      {/* Display farmerName, selectedProducts, and totalPrice in your CustomerCheckout screen */}
      <Text>Farmer: {farmerName}</Text>
      {/* Loop through selectedProducts and display product name and quantity */}
      {selectedProducts.map(product => (
        <Text key={product.name}>{product.name}: {product.quantity}</Text>
      ))}
      <Text>Total Price: {totalPrice}</Text>
      {/* ... (rest of the code) */}
    </View>
  );
};

export default CustomerCheckout;
