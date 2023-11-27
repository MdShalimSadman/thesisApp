import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const FarmerProfile = ({ route }) => {
  const {name, products} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Farmer Profile</Text>
      <Text style={styles.farmerName}>Name: {name}</Text>
      <Text style={styles.productsList}>Products: {products.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop:15,
    marginLeft:19,
    justifyContent: 'start',
    alignItems: 'start',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 16,
  },
  farmerName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  productsList: {
    fontSize: 16,
    color: 'black',
  },
});

export default FarmerProfile;
