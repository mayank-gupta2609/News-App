import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Loader = ({ backgroundColor }) => {
    return (
        <View style={{
            width: "100%",
        }}>
            <View style={{
                borderBottomWidth: 5,
                height: 300,
                margin: 10,
                width: "95%",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: backgroundColor
            }}></View>
            <View style={{
                borderBottomWidth: 5,
                height: 300,
                margin: 10,
                width: "95%",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: backgroundColor
            }}></View>
            <View style={{
                borderBottomWidth: 5,
                height: 300,
                margin: 10,
                width: "95%",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: backgroundColor
            }}></View>
            <View style={{
                borderBottomWidth: 5,
                height: 300,
                margin: 10,
                width: "95%",
                borderRadius: 10,
                overflow: "hidden",
                backgroundColor: backgroundColor
            }}></View>
        </View>
    )
}


export default Loader