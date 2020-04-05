import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
export default class Home extends React.Component {
    constructor() {
        super()
        this.state = {
            userName: ''
        }
    }
    componentDidMount = () => {
        //firebase.initializeApp(firebaseConfig)
    }

    render() {
        const toDos = [
            {
                name: 'Wash the dishes',
                id: 1
            },
            {
                name: 'Do business homework',
                id: 2
            },
            {
                name: 'finish react course',
                id: 3
            },
            {
                name: 'Finish node.js crash cource',
                id: 4
            },
            {
                name: 'buy MERN from hitesh',
                id: 5
            },
            {
                name: 'Eat',
                id: 6
            },
            {
                name: 'Learn MongoDb',
                id: 7
            },
            {
                name: 'Play fortnite',
                id: 8
            },
            {
                name: 'Sleep',
                id: 9
            },
        ]
        return (
            <View>
                <FlatList
                    data={toDos}
                    keyExtractor={(item, index) => item.id}
                    renderItem={({ item }) => {
                        return (
                            <View style={{ flex: 1, paddingVertical: 10, }}>
                                <View style={{ flex: 1, display: 'flex', flexDirection: 'row', backgroundColor: 'lightblue', paddingVertical: 10, paddingHorizontal: 5 }}>
                                    <Text style={{ fontSize: 20, }}>{item.id}: </Text>
                                    <Text style={{ fontSize: 20 }}>{item.name}</Text>
                                </View>
                            </View>
                        )
                    }}
                />
                <Text>{this.state.userName}</Text>
                <Button title="Go to Sign In" onPress={() => this.props.navigation.navigate('SignIn')} />
            </View>
        );
    }
}