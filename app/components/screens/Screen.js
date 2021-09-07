import React from 'react';
import { StatusBar, StyleSheet, ScrollView } from 'react-native';

const Screen = (props) => {

    return (
        <ScrollView style={styles.container}>
            {props.children}
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    container: {
        height: StatusBar.currentHeight,
        paddingHorizontal: 15,
        backgroundColor: '#f7f3f3',
        flex: 1,
    }
})
export default Screen;

