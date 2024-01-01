import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const FarmerProfile = ({route, navigation}) => {
  const {name, products} = route.params;
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language ,
  );

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
        <Text style={styles.productPrice}>
          {t('takaPerKg')}
          {` ${dummyPrices[item].toFixed(2)}`}
        </Text>
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
  const {t} = useTranslation(['translation'], {i18n});
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
   setSelectedLanguage(i18n.language);
  };

  return (
    <>
      <View style={styles.languageButtonsContainer}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'en'
              ? {backgroundColor: 'green'}
              : {backgroundColor: 'white'},
          ]}
          onPress={() => changeLanguage('en')}>
          <Text
            style={[
              styles.languageButtonText,
              selectedLanguage === 'en' ? {color: 'white'} : {color: 'green'},
            ]}>
            En
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'bn'
              ? {backgroundColor: 'green'}
              : {backgroundColor: 'white'},
          ]}
          onPress={() => changeLanguage('bn')}>
          <Text
            style={[
              styles.languageButtonText,

              selectedLanguage === 'bn' ? {color: 'white'} : {color: 'green'},
            ]}>
            বাং
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={styles.headerText}>
          {name}
          {t('products')}
        </Text>
        <FlatList
          data={products}
          keyExtractor={item => item}
          renderItem={renderProductItem}
        />
        <Text style={styles.totalPriceText}>
          {t('totalPrice')}
          {t('taka')} 
          {getTotalPrice()}
        </Text>
        <TouchableOpacity onPress={handleAddToCart}>
          <View style={styles.addToCartButton}>
            <Text style={styles.addToCartButtonText}>{t('addToCart')}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  productDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageButtonsContainer: {
    position: 'absolute',
    right: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    marginTop: 20,
    marginRight: 15,
  },
  languageButton: {
    flex: 1,
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    fontSize: 5,
  },
  languageButtonText: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: 'grey',
    marginRight: 10,
  },
  container: {
    flex: 1,
    padding: 16,
    marginTop: 80
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
