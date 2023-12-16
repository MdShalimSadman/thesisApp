import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { Auth } from '../services';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const SignUp = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language ,
  );

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
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
   setSelectedLanguage(i18n.language);
  };

  return (
    <><View style={styles.languageButtonsContainer}>
      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'en'
              ? {backgroundColor: 'green'}
            : { backgroundColor: 'white' },
        ]}
        onPress={() => changeLanguage('en')}
      >
        <Text
          style={[
            styles.languageButtonText,
            selectedLanguage === 'en'
              ? { color: 'white' }
              : { color: 'green' },
          ]}
        >
          En
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.languageButton,
          selectedLanguage === 'bn'
            ? { backgroundColor: 'green' }
            : { backgroundColor: 'white' },
        ]}
        onPress={() => changeLanguage('bn')}
      >
        <Text
          style={[
            styles.languageButtonText,

            selectedLanguage === 'bn'
              ? { color: 'white' }
              : { color: 'green' },
          ]}
        >
          বাং
        </Text>
      </TouchableOpacity>
    </View>
    <View style={styles.container}>
        <Text style={styles.logoText}>{t('title')}</Text>

        <TextInput
          placeholder={t('email')}
          onChangeText={(e) => setEmail(e)}
          style={styles.textInput} />
        <TextInput
          placeholder={t('password')}
          onChangeText={(e) => setPassword(e)}
          style={styles.textInput}
          secureTextEntry={true} />

        <TouchableOpacity onPress={handleSignUp}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{t('signup')}</Text>
          </View>
        </TouchableOpacity>
      </View></>
  );
};

export default SignUp;

const styles = StyleSheet.create({
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
