//import liraries
import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import {DotIndicator} from 'react-native-indicators'

// create a component
const ActivityIndicator = ({visibile}) => {
    if(!visibile){
        return null;
    }
    return (
        <View style={styles.container}>
            {/* <LottieView source={require('../../../assets/indicator.json')} autoPlay loop />; */}
            <DotIndicator color='#00ced1'/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        zIndex: 1
    },
    
});

//make this component available to the app
export default ActivityIndicator;
