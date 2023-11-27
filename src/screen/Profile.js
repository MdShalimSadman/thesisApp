import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
// import uuid from 'react-native-uuid';

const Profile = props => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();

  const registerUser = async () => {
    console.log('registerUser function called');
    // const userId = uuid.v4();
    const users = await firestore().collection('data').get();
    console.log({users});
  };


  const addUserToFirestore = async (userData) => {
    try {
      console.log({userData});
      await firestore()
        .collection('users')
        .add(userData);
      console.log('User added!');
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
    }
  };
  
  // Usage


  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter name"
        onChangeText={e => setName(e)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Enter address"
        onChangeText={e => setAddress(e)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Enter phone"
        onChangeText={e => setPhone(e)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Enter password"
        onChangeText={e => setPassword(e)}
        style={styles.textInput}
        secureTextEntry={true}
      />
      <TextInput
        placeholder="Enter user type"
        onChangeText={e => setUserType(e)}
        style={styles.textInput}
      />
      <TouchableOpacity onPress={()=>  addUserToFirestore({ name: 'John Doe', email: 'john@example.com' })}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Edit Profile</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'lightgrey',
    color: 'black',
    fontSize: 18,
    width: '80%',
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'green',
    padding: 15,
    marginVertical: 20,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
