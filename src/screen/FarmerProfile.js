import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const FarmerProfile = ({route, navigation}) => {
  const {name, products} = route.params;

  const dummyPrices = {
    Rice: 2.5,
    Tomato: 1.0,
    Carrot: 0.75,
    Cucumber: 1.5,
    Potato: 1.3,
    Strawberry: 1.5,
  };

  const [cart, setCart] = useState({}); // State to track selected quantities

  const handleQuantityChange = (product, quantity) => {
    setCart(prevCart => ({
      ...prevCart,
      [product]: quantity,
    }));
  };

  const handleAddToCart = () => {
    // Filter out products with quantity > 0
    const selectedProducts = Object.keys(cart).filter(
      product => cart[product] > 0,
    );

    // Prepare data to pass to CustomerCheckout screen
    const checkoutData = {
      farmerName: name,
      selectedProducts: selectedProducts.map(product => ({
        name: product,
        quantity: cart[product],
      })),
      totalPrice: getTotalPrice(),
    };

    // Navigate to CustomerCheckout screen and pass data
    navigation.navigate('Customer Checkout', checkoutData);
  };

  const getTotalPrice = () => {
    let totalPrice = 0;
    Object.keys(cart).forEach(product => {
      const quantity = cart[product];
      const price = dummyPrices[product];
      totalPrice += quantity * price;
    });
    return totalPrice.toFixed(2); // Round to 2 decimal places
  };

  const renderProductItem = ({item}) => (
    <View style={styles.productItem}>
      <Text style={styles.productName}>{item}</Text>
      <View style={styles.productDetails}>
        <Text style={styles.productPrice}>{`Tk per Kg: ${dummyPrices[item].toFixed(
          2,
        )}`}</Text>
        <TextInput
          style={styles.quantityInput}
          placeholder="qty (kg)"
          keyboardType="numeric"
          placeholderTextColor="grey"
          value={cart[item] ? cart[item].toString() : ''}
          onChangeText={text => handleQuantityChange(item, text)}
        />
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{name}'s Products</Text>
      <FlatList
        data={products}
        keyExtractor={item => item}
        renderItem={renderProductItem}
      />
      <Text style={styles.totalPriceText}>
        Total Price: Taka {getTotalPrice()}
      </Text>
      <TouchableOpacity onPress={handleAddToCart}>
        <View style={styles.addToCartButton}>
          <Text style={styles.addToCartButtonText}>+ Add to Cart</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: 'grey',
    marginRight: 10,
  },
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
  totalPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  },
});

export default FarmerProfile;
