//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

// create a component
const CloseBtn = ({onPress}) => {
    return (
        <View style={styles.container}>
            <Icon name='close' size={25} color='white' style={styles.image} onPress={onPress}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        position:'absolute',
        bottom:0,
        marginVertical:20
    },
    image:{
        backgroundColor: 'rgba(92,90,91,0.7)',
        padding:10,
        borderRadius:50,
    }
});

//make this component available to the app
export default CloseBtn;
