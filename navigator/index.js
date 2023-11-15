import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNav from './navigator';
import AuthNavigator from './authNavigator';

import auth from '@react-native-firebase/auth';

const AppContainer = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null); // Initialize user with null

  function onAuthStateChange(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChange);
    return subscriber;
  }, []); // Pass an empty array to useEffect for one-time setup

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ? <MainNav /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default AppContainer;
