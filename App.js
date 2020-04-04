import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <Text>HOME</Text>
    );
  }
}
