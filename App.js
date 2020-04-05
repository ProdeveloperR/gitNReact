import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as firebase from 'firebase'
import Main from './Screens/Main'

let firebaseConfig = require('./firebase')
firebase.initializeApp(firebaseConfig)
export default class App extends React.Component {
  // if (!firebase.apps.length) {
  // firebase.initializeApp(firebaseConfig);
  render() {
    return (
      <Main />
    );
  }
}