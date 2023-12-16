import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Auth } from '../services';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSignUp = async () => {
    try {
      // Assuming Auth.signUp returns a promise
      await Auth.signUp(email, password);
      // If successful, navigate to the 'Home' screen
      props.navigation.navigate('Home');
    } catch (error) {
      // Handle any authentication errors here
      console.error('Authentication error:', error.message);
      // You might want to display an error message to the user
    }
  };

  const { t } = useTranslation(['translation'], { i18n });

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>{t('title')}</Text>

      <TextInput
        placeholder={t('email')}
        onChangeText={(e) => setEmail(e)}
        style={styles.textInput}
      />
      <TextInput
        placeholder={t('password')}
        onChangeText={(e) => setPassword(e)}
        style={styles.textInput}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleSignUp}>
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
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 20,
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
