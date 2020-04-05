import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity, Button, StyleSheet, Text } from 'react-native'
import * as firebase from 'firebase'
export default class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            pwd: '',
        }
    }

    signUp = () => {
        const { name, email, pwd } = this.state
        firebase.auth().createUserWithEmailAndPassword(email, pwd).then((auth) => {
            auth.user.updateProfile({
                name: name,
                email: email,
                password: pwd
            })
            this.props.navigation.replace('Home')
        }).catch((e) => {
            Alert.Alert(e.message)
        })
    }
    render() {
        return (
            <View>
                <View style={styles.form}>
                    <TextInput
                        placeholder="Name"
                        placeholderTextColor="#D0CBD4"
                        keyboardType="email-address"
                        autoCapitalize={'none'}
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
                    <Text style={styles.submitText}>Register</Text>
                </TouchableOpacity>
                <Button title="Already have an account?" onPress={() => this.props.navigation.replace('SignIn')} />
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