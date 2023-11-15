import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../src/screen/Home';


const Stack = createStackNavigator();

const MainNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default MainNav;
