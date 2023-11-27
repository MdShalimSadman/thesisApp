import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const CustomerCheckout = ({ route }) => {
  const { farmerName, selectedProducts, totalPrice } = route.params;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: '#F5F5F5',
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
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 5,
    },
    productName: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'black',
    },
    quantityText: {
      fontSize: 16,
      color: 'black',
    },
    totalPriceText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Order Summary</Text>

      <Text>Farmer: {farmerName}</Text>
      <FlatList
        data={selectedProducts}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.totalPriceText}>Total Price: Taka {totalPrice}</Text>
      {/* Additional components or features can be added here */}
    </View>
  );
};

export default CustomerCheckout;
