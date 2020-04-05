import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as firebase from 'firebase'
import Main from './Screens/Main'

let firebaseConfig = require('./firebase.js')

export default class App extends React.Component {
  componentDidMount() {
    var firebaseConfig = {
      apiKey: "AIzaSyCjm2q9UMYG9PBwPAUOJNgcVQqYtKgoRFI",
      authDomain: "imessage-7d172.firebaseapp.com",
      databaseURL: "https://imessage-7d172.firebaseio.com",
      projectId: "imessage-7d172",
      storageBucket: "imessage-7d172.appspot.com",
      messagingSenderId: "620960173583",
      appId: "1:620960173583:web:1bae966d4b5bccf5ef5d7a",
      measurementId: "G-81VRKJ3V3V"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig)
    }
  }
  // if (!firebase.apps.length) {
  // firebase.initializeApp(firebaseConfig);
  render() {
    return (
      <Main />
    );
  }
}