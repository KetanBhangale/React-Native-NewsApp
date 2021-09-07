//import liraries
import React from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback ,ActivityIndicator} from 'react-native';

// create a component
const ViewMore = ({style, onPress, visibility}) => {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
        <View style={[styles.container, style]}>
        {visibility && <ActivityIndicator size="small" color="#0000ff"/>}
            {!visibility && <Text style={styles.text}>View More</Text>}
        </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:8,
        backgroundColor:'white',
        height:50
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:"#7a74e0"
    }

});

//make this component available to the app
export default ViewMore;
