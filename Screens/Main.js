import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '../Screens/SignIn'
import SignUp from '../Screens/SignUp'
import Home from '../Screens/Home'
const Stack = createStackNavigator()


export default class Main extends React.Component {
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
