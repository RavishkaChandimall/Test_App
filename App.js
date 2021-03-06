import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './Component/LoginScreen';
import TablePageScreen from './Component/TablePage';
import Form from './Component/Form';
import SignUpPage from './Component/SignUpPage';

export default class App extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Table"
            component={TablePageScreen}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Form"
            component={Form}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignUp"
            component={SignUpPage}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
