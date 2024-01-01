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

const CustomerCheckout = ({route, navigation}) => {
  const {farmerName, selectedProducts, totalPrice} = route.params;

  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || 'en',
  );

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      marginTop: 80,
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
        <Text style={styles.headerText}>{t('customerInfo')}</Text>
        {/* Customer Information */}
        <View style={styles.customerInfoContainer}>
          <TextInput
            style={styles.input}
            placeholder={t('customerName')}
            placeholderTextColor="grey"
            value={customerName}
            onChangeText={setCustomerName}
          />
          <TextInput
            style={styles.input}
            placeholder={t('customerPhone')}
            placeholderTextColor="grey"
            value={customerPhone}
            onChangeText={setCustomerPhone}
          />
          <TextInput
            style={styles.input}
            placeholder={t('customerAddress')}
            value={customerAddress}
            placeholderTextColor="grey"
            onChangeText={setCustomerAddress}
          />
        </View>

        <Text style={styles.headerText2}>{t('orderSummary')}</Text>
        {/* Product and Quantity Information */}
        <Text style={styles.farmerNameHeading}>
          {' '}
          {t('farmer')}
          {farmerName}
        </Text>
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
        <Text style={styles.totalPriceText}>
          {t('totalPrice')}
          {t('taka')}
          {totalPrice}
        </Text>
        <TouchableOpacity onPress={handleProceedToPayment}>
          <View style={styles.proceedToPaymentButton}>
            <Text style={styles.proceedToPaymentButtonText}>
              {t('proceedToBidding')}
            </Text>
          </View>
        </TouchableOpacity>
        {/* Additional components or features can be added here */}
      </View>
    </>
  );
};

export default CustomerCheckout;
