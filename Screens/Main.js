import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
import * as firebase from 'firebase'
const Stack = createStackNavigator()


export default class Main extends React.Component {

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
            firebase.auth().onAuthStateChanged(auth => {
                if (!auth) {
                    this.props.navigation.replace('SignIn')
                } else {
                    console.log(firebase.auth().currentUser.displayName)
                }
            })
        }
    }
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={Home} options={{
                        title: 'iMessage',
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
