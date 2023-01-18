import {Component} from "react";
import React from "react";
import {Text, View} from "react-native";

class Cat extends Component{
    render() {
        return (
            <View className={"Cat"}>
                <Text>Hallo, ich bin deine Katze!</Text>
            </View>
        )
    }
}

export default Cat;