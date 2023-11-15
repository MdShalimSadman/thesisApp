import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';

import firestore from '@react-native-firebase/firestore';
import uuid from 'react-native-uuid';

const SignUp = props => {
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [userType, setUserType] = useState();

  const registerUser = () => {
    console.log('registerUser function called');
    const userId = uuid.v4();
    firestore()
      .collection('users')
      .add({
        name: name,
        address: address,
        phone: phone,
        password: password,
        userType: userType,
        userId: userId,
      })
      .then(res => {
        console.log('user created');
      })
      .catch(error => {
        console.error('Error creating user:', error);
      });
  };

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
      <TouchableOpacity onPress={registerUser}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;

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
