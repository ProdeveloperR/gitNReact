import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import * as firebase from 'firebase'

const Stack = createStackNavigator()
export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={{
            title: 'HOME',
            headerStyle: {
              height: 120,
              backgroundColor: '#38A1CF'
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 30,

            }
          }} />
          <Stack.Screen name="SignIn" component={SignIn} options={{
            title: 'Sign In',
            headerStyle: {
              height: 120,
              backgroundColor: '#38A1CF'
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 30,

            }
          }} />
          <Stack.Screen name="SignUp" component={SignUp} options={{
            title: 'Sign Up',
            headerStyle: {
              height: 120,
              backgroundColor: '#38A1CF'
            },
            headerTitleStyle: {
              color: '#ffffff',
              fontSize: 30,
            }
          }} />
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

  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      pwd: '',
    }
  }

  signUp = () => {
    const { name, email, pwd } = this.state;

  }
  render() {
    return (
      <View>
        <View style={styles.form}>
          <TextInput placeholder="Name"
            placeholderTextColor="#D0CBD4"
            keyboardType="default"
            autoCapitalize={'words'}
            style={styles.input}
            onChangeText={name => this.setState({ name })} />
          <TextInput
            placeholder="Email"
            placeholderTextColor="#D0CBD4"
            keyboardType="email-address"
            autoCapitalize={'none'}
            style={styles.input}
            onChangeText={email => this.setState({ email })} />
          <TextInput placeholder="Password"
            placeholderTextColor="#D0CBD4"
            keyboardType="default"
            secureTextEntry={true}
            autoCapitalize={'words'}
            style={styles.input}
            onChangeText={pwd => this.setState({ pwd })} />
        </View>
        <TouchableOpacity onPress={() => this.signUp()}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
        <Button title="Create an account?" onPress={() => this.props.navigation.replace('SignUp')} />
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


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#1875D2',
    height: 130,
  },
  headerText: {
    display: 'flex',
    flex: 1,
    alignSelf: 'flex-start',
    paddingVertical: 60,
    paddingHorizontal: 20,
    fontSize: 38,
    color: '#ffffff',
    fontWeight: 'bold'
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#D0CBD4',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 9,
    fontSize: 20,
    marginBottom: 20,
    color: '#1C1D21'
  },
  form: {
    marginTop: 16,
    marginHorizontal: 8,
  },
  submitText: {
    backgroundColor: '#0C60FF',
    color: '#ffffff',
    marginHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 30,
    textAlign: 'center',
  }
})