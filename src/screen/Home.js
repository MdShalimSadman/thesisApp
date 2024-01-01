import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const Home = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language ,
  );
  const [farmers, setFarmers] = useState([
    {
      id: '1',
      name: 'Abul Kashem',
      products: ['Rice', 'Potato', 'Cucumber'],
    },
    {
      id: '2',
      name: 'Abdul Huda',
      products: ['Rice', 'Tomato'],
    },
    {
      id: '3',
      name: 'Nasif Shah',
      products: ['Carrot'],
    },
    {
      id: '4',
      name: 'Korim Hossain',
      products: ['Strawberry'],
    },
    // Add more dummy farmers as needed
  ]);

  const filteredFarmers = farmers.filter(farmer =>
    farmer.products.some(product =>
      product.toLowerCase().includes(searchQuery.toLowerCase()),
    ),
  );

  const {t} = useTranslation(['translation'], {i18n});
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
   setSelectedLanguage(i18n.language);
  };

  const renderFarmerItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Farmer Profile', {
          name: item.name,
          products: item.products,
        });
      }}>
      <View style={styles.farmerItem}>
        <Text style={styles.farmerName}>{item.name}</Text>
        <Text style={styles.productsList}>
          Products: {item.products.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  );

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
        <Text style={styles.headerText}>{t('title')}</Text>

        <TextInput
          placeholder={t('productSearch')}
          placeholderTextColor="#B0B3B8" // Set the placeholder text color
          onChangeText={text => setSearchQuery(text)}
          style={styles.searchBar}
        />
        <FlatList
          data={filteredFarmers}
          keyExtractor={item => item.id}
          renderItem={renderFarmerItem}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop: 100,
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
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderRadius: 20,
    padding: 8,
    marginBottom: 16,
    fontSize: 16,
    // color: '#B0B3B8',
    color: '#000000',
    backgroundColor: '#D0D2D7',
  },

  farmerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingVertical: 8,
    marginBottom: 8,
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

export default Home;
