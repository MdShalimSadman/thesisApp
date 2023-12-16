import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const Login = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || 'en',
  );


  const handleLogin = async () => {
    try {
      const response = await auth().signInWithEmailAndPassword(
        email.trim(),
        password
      );
      console.log({ response });
      props.navigation.navigate('Home');
    } catch (error) {
      console.error('Authentication error:', error.message);
    }
  };

  const { t } = useTranslation(['translation'], { i18n });
  const changeLanguage = (lng) => {
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
            ? { backgroundColor: 'green' }
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

        <TouchableOpacity onPress={handleLogin}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{t('login')}</Text>
          </View>
        </TouchableOpacity>

        <Text style={styles.questionText}>{t('accountQuestion')}</Text>
        <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
          <Text style={styles.linkText}>{t('createAccount')}</Text>
        </TouchableOpacity>
      </View></>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  questionText: {
    marginTop: 10,
    color: '#000000',
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
    marginVertical: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
  linkText: {
    color: 'green',
    fontSize: 18,
    marginTop: 2,
  },
});
