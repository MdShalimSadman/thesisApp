import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const languageButton = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
   setSelectedLanguage(i18n.language);
  };
  return (
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
  );
};

export default languageButton;

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
});
