// RatingScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Rating } from 'react-native-ratings';

const RatingScreen = () => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');

  const handleRating = (rated) => {
    setRating(rated);
  };

  const handleFeedbackChange = (text) => {
    setFeedback(text);
  };

  const submitRating = () => {
    // You can implement the logic to submit the rating and feedback to your backend here
    console.log('Rating:', rating);
    console.log('Feedback:', feedback);
    // Add your API call or any other necessary actions here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Submit Your Review</Text>
      <Text style={styles.subTitle}>Please write your feedback and give a review so that other users can understand the product quality</Text>
      <View style={styles.ratingContainer}>
        <Rating
          showRating
          onFinishRating={handleRating}
          style={{ paddingVertical: 10 }}
        />
      </View>

      <TextInput
        style={styles.feedbackInput}
        placeholderTextColor="gray"
        placeholder="Leave your feedback here"
        multiline
        numberOfLines={4}
        onChangeText={(text) => handleFeedbackChange(text)}
      />

      <Button
        title="Submit Rating"
        onPress={submitRating}
        disabled={rating === 0}
        color={rating !== 0 ? 'green' : 'gray'}
        style={rating !== 0 ? styles.submitButtonEnabled : styles.submitButtonDisabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 5,
    color: 'green',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    textAlign: 'center',
  },
  ratingContainer: {
    marginVertical: 20,
  },
  feedbackInput: {
    width: '80%',
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    padding: 10,
    color: 'black',
  },
  submitButtonEnabled: {
    backgroundColor: 'green',
    color: 'white', // Set text color to white when active
  },
  submitButtonDisabled: {
    backgroundColor: 'gray',
  },
});

export default RatingScreen;
