import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import i18n from '../i18n';
import * as RNLocalize from 'react-native-localize';

const Bidding = ({route, navigation}) => {
  const {estimatedPrice, totalPrice} = route.params;
  const [userProposedPrice, setUserProposedPrice] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState(
    i18n.language || 'en',
  );
  const [timer, setTimer] = useState(60); // 5 minutes in seconds
  const [timerExpired, setTimerExpired] = useState(false);

  const handleAccept = () => {
    // Implement logic for accepting estimated price
    // This can include further actions like initiating payment, etc.
    console.log('Accepted Estimated Price:', estimatedPrice);
  };

  const handlePropose = () => {
    // Implement logic for user proposing a price
    // This can include further actions like sending the proposed price to the server, etc.
    console.log('User Proposed Price:', userProposedPrice);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prevTimer => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (timer === 0) {
      setTimerExpired(true);
    }
  }, [timer]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
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
        <Text style={styles.headerText}>{t('bidding')}</Text>
        <Text style={styles.estimatedPriceText}>
          {t('measured')}
          {t('taka')}
          {totalPrice}
        </Text>
        <Text style={styles.subHeaderText}>{t('choose')}</Text>

        <TouchableOpacity style={styles.optionButton} onPress={handleAccept}>
          <Text style={styles.optionButtonText}>{t('accept')}</Text>
        </TouchableOpacity>
        {timerExpired ? (
          <Text style={styles.timerExpiredText}>{t('warning')}</Text>
        ) : (
          <>
            <Text style={styles.subHeaderText}>{t('or')}</Text>

            <Text style={styles.subHeaderText}>{t('propose')}</Text>
            <TextInput
              style={styles.input}
              placeholder={t('enterProposed')}
              keyboardType="numeric"
              value={userProposedPrice}
              onChangeText={text => setUserProposedPrice(text)}
              placeholderTextColor="grey"
              editable={!timerExpired}
            />

            <TouchableOpacity
              style={styles.optionButton}
              onPress={handlePropose}
              disabled={timerExpired}>
              <Text style={styles.optionButtonText}>{t('proposeButton')}</Text>
            </TouchableOpacity>
          </>
        )}
        <Text style={styles.timerText}>
         {t('time')}
         {formatTime(timer)}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    marginTop:80
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
  estimatedPriceText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 16,
  },
  timerText: {
    fontSize: 18,
    color: 'black',
    marginTop: 8,
  },
  timerExpiredText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 16,
    marginTop: 16,
  },
  subHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 16,
  },
  optionButton: {
    backgroundColor: 'green',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  optionButtonText: {
    color: 'white',
    fontSize: 18,
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
});

export default Bidding;
