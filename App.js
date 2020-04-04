import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'


const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="SignUp" component={SignUp} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

class Home extends React.Component {
  render() {
    return (
      <View>
        <Button title="Go to Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
      </View>
    );
  }
}

class SignIn extends React.Component {
  render() {
    return (
      <View>
        <Button title="Sign Up" onPress={() => this.props.navigation.replace('SignUp')} />
      </View>
    );
  }
}

class SignUp extends React.Component {
  render() {
    return (
      <Text>HOME</Text>
    );
  }
}