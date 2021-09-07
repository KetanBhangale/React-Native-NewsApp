import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const SearchBar = () => {

    return (
        <View style={styles.container}>
            <TextInput placeholder='Search here....' style={styles.searchbar}></TextInput>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        marginTop: 20,
        justifyContent: 'center'


    },
    searchbar: {
        width: '100%',
        height: '100%',
        paddingStart: 16,
        fontSize: 16,
        paddingLeft: 10

    }
})

export default SearchBar