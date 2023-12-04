import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

const Bidding = ({ route, navigation }) => {
  const { estimatedPrice, totalPrice } = route.params;
  const [userProposedPrice, setUserProposedPrice] = useState('');

  const handleAccept = () => {
    // Implement logic for accepting estimated price
    // This can include further actions like initiating payment, etc.
    console.log('Accepted Estimated Price:', estimatedPrice);
  };

  const handlePropose = () => {
    // Implement logic for user proposing a price
    // This can include further actions like sending the proposed price to the server, etc.
    console.log('User Proposed Price:', userProposedPrice);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bidding</Text>
      <Text style={styles.estimatedPriceText}>Measured Price: Taka {totalPrice}</Text>
      <Text style={styles.subHeaderText}>Choose an option:</Text>

      <TouchableOpacity style={styles.optionButton} onPress={handleAccept}>
        <Text style={styles.optionButtonText}>Accept and Proceed</Text>
      </TouchableOpacity>

      <Text style={styles.subHeaderText}>OR</Text>

      <Text style={styles.subHeaderText}>Propose a Price:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your proposed price"
        keyboardType="numeric"
        value={userProposedPrice}
        onChangeText={text => setUserProposedPrice(text)}
        placeholderTextColor="grey"
      />

      <TouchableOpacity style={styles.optionButton} onPress={handlePropose}>
        <Text style={styles.optionButtonText}>Propose Price</Text>
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
  estimatedPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
  },
  optionButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
    color: 'black',
  },
});

export default Bidding;
