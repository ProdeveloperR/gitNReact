import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'

export default class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            pwd: '',
        }
    }

    signIn = () => {
        const { name, email, pwd } = this.state;
        firebase.auth().signInWithEmailAndPassword(email, pwd).then((auth) => {
            auth.user.updateProfile({
                displayName: name,
                email: email,
                password: pwd
            }).then(() => {
                this.props.navigation.replace('Home')
            })
        }).catch((e) => {
            Alert.alert(e.message)
        })
    }
    render() {
        return (
            <View>
                <View style={styles.form}>
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
                <TouchableOpacity onPress={() => this.signIn()}>
                    <Text style={styles.submitText}>Submit</Text>
                </TouchableOpacity>
                <Button title="Create an account?" onPress={() => this.props.navigation.replace('SignUp', {
                    name: firebase.auth().currentUser.displayName
                })} />
            </View>
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