import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native';

export default class App1 extends Component{
    render() { 
        return(
            <View style={styles.container}>
                <Text>hi</Text>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'grey'
    }
})