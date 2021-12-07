
import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import CircleButton from '../CircleButton';






class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            val: ""
        };
        this.add = this.add.bind(this)
    }
    add() {
        var a = this.state.val + " " + this.state.title
        console.log(Date.now());
        this.saveItem(Date.now(), a)
    }
    async saveItem(keys, values) {
        console.log(keys);
        await SecureStore.setItemAsync(keys + "", values);
        var i = this.getItem()
        if (i)
            console.log(i);
        await SecureStore.setItemAsync("abc", i + "-" + keys);
    }
    async getItem() {
        let result = await SecureStore.getItemAsync("abc");
        if (result) {
            console.log(result);
            return result
        } else {
            alert('No values stored under that key.');
        }
    }

    render() {
        return (

            <View>
                <TextInput
                    underlineColorAndroid="#ff0000"
                    placeholder="TEST"
                    onChangeText={(text) => this.setState({ title: text })}
                />
                <TextInput
                    underlineColorAndroid="#ff0000"
                    placeholder="TEST"
                    onChangeText={(text) => this.setState({ val: text })}
                />
                <CircleButton func={this.add} size={30} title={"+"}></CircleButton>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1
    }
})
export default Add;