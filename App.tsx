// import React from 'react';
// import AppContainer from './navigator';

// const App = () => {
//   <>
//     <AppContainer />
//   </>;
// };

// export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screen/Login';
import SignUp from './src/screen/SignUp';
import Home from './src/screen/Home';
import SignUp2 from './src/screen/SignUp2';
import FarmerProfile from './src/screen/FarmerProfile';

const Stack = createNativeStackNavigator();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp2" component={SignUp2} />
        <Stack.Screen name="FarmerProfile" component={FarmerProfile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
