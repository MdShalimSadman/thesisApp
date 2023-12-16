import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Assuming Auth.signIn returns a promise  
      const response = await auth().signInWithEmailAndPassword(email.trim(), password)
      console.log({response});
      // If successful, navigate to the 'Home' screen
      props.navigation.navigate('Home');
    } catch (error) {
      // Handle any authentication errors here
      console.error('Authentication error:', error.message);
      // You might want to display an error message to the user
    }
  };

  const {t} = useTranslation(['translation'], {i18n});

  return (
    <View style={styles.container}>
      <Text style={styles.logoText}>{t('greeting')}</Text>
      <TextInput
        placeholder="Enter email"
        onChangeText={e => setEmail(e)}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Enter password"
        onChangeText={e => setPassword(e)}
        style={styles.textInput}
        secureTextEntry={true}
      />

      <TouchableOpacity onPress={handleLogin}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
      </TouchableOpacity>

      <Text style={styles.questionText}>Don't have an account?</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
        <Text style={styles.linkText}>Create Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    color: 'green', // Set the hyperlink color to green
    fontSize: 18,
    marginTop: 2,
  },
});
