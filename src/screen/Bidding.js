import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Bidding = ({route, navigation}) => {
  const {estimatedPrice, totalPrice} = route.params;
  const [userProposedPrice, setUserProposedPrice] = useState('');
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

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Bidding</Text>
      <Text style={styles.estimatedPriceText}>
        Measured Price: Taka {totalPrice}
      </Text>
      <Text style={styles.subHeaderText}>Choose an option:</Text>

      <TouchableOpacity style={styles.optionButton} onPress={handleAccept}>
        <Text style={styles.optionButtonText}>Accept and Proceed</Text>
      </TouchableOpacity>
      {timerExpired ? (
        <Text style={styles.timerExpiredText}>Time Limit Expired for bidding. Please tap on "Accept and Proceed" to proceed to payment</Text>
      ) : (
        <>
          <Text style={styles.subHeaderText}>OR</Text>

          <Text style={styles.subHeaderText}>Propose a Price:</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter your proposed price"
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
            <Text style={styles.optionButtonText}>Propose Price</Text>
          </TouchableOpacity>
        </>
      )}
        <Text style={styles.timerText}>Time Left: {formatTime(timer)}</Text>
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
