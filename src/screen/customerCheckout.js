import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';

const CustomerCheckout = ({route, navigation}) => {
  const {farmerName, selectedProducts, totalPrice} = route.params;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');

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
    headerText2: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'green',
      marginBottom: 16,
      marginTop: 16,
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
      marginTop: 20,
    },
    customerInfoContainer: {
      marginTop: 20,
    },
    farmerNameHeading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'black',
      marginBottom: 10,
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
    proceedToPaymentButton: {
      backgroundColor: 'green',
      padding: 15,
      borderRadius: 5,
      alignItems: 'center',
      marginTop: 20,
      marginBottom: 10,
    },
    proceedToPaymentButtonText: {
      color: 'white',
      fontSize: 18,
    },
  });

  const handleProceedToPayment = () => {
    // Navigate to Bidding screen and pass necessary parameters
    navigation.navigate('Bidding', {
      customerName,
      customerPhone,
      customerAddress,
      farmerName,
      totalPrice,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Customer Information</Text>
      {/* Customer Information */}
      <View style={styles.customerInfoContainer}>
        <TextInput
          style={styles.input}
          placeholder="Customer Name"
          placeholderTextColor="grey"
          value={customerName}
          onChangeText={setCustomerName}
        />
        <TextInput
          style={styles.input}
          placeholder="Customer Phone"
          placeholderTextColor="grey"
          value={customerPhone}
          onChangeText={setCustomerPhone}
        />
        <TextInput
          style={styles.input}
          placeholder="Customer Address"
          value={customerAddress}
          placeholderTextColor="grey"
          onChangeText={setCustomerAddress}
        />
      </View>

      <Text style={styles.headerText2}>Order Summary</Text>
      {/* Product and Quantity Information */}
      <Text style={styles.farmerNameHeading}> Farmer: {farmerName}</Text>
      <FlatList
        data={selectedProducts}
        keyExtractor={item => item.name}
        renderItem={({item}) => (
          <View style={styles.productItem}>
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.quantityText}>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
      <Text style={styles.totalPriceText}>Total Price: Taka {totalPrice}</Text>
       <TouchableOpacity onPress={handleProceedToPayment}>
        <View style={styles.proceedToPaymentButton}>
          <Text style={styles.proceedToPaymentButtonText}>Proceed to Bidding</Text>
        </View>
      </TouchableOpacity>
      {/* Additional components or features can be added here */}
    </View>
  );
};

export default CustomerCheckout;
