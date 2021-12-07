
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';






class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tekst: ""
        };

    }
    componentDidMount() {
        this.saveItem("index", "")
        this.getItem("index")
    }
    async saveItem(key, value) {
        await SecureStore.setItemAsync(key, value);
    }
    async getItem() {
        let result = await SecureStore.getItemAsync("abc");
        if (result) {
            alert("🔐 Here's your value 🔐 \n" + result);
        } else {
            alert('No values stored under that key.');
        }
    }

    render() {
        return (

            <View></View>


        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Main;