import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';


const Feed = () => {
  const [searchQuery, setSearchQuery] = useState('');
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

  const renderFarmerItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        item.navigation.navigate('FarmerProfile', {
          name: item.name,
          products: item.products,
        });
      }}
    >
      <View style={styles.farmerItem}>
        <Text style={styles.farmerName}>{item.name}</Text>
        <Text style={styles.productsList}>
          Products: {item.products.join(', ')}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Alokito Krishi</Text>

      <TextInput
        placeholder="Search for products"
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

export default Feed;
