//import liraries
import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import SubTitle from '../common/SubTitle';
import Title from '../common/Title';


// create a component
const BlockedCard = ({style, imageStyle, item, onPress}) => {
    const {title, description, urlToImage} = item
    return (
        <TouchableWithoutFeedback onPress= {onPress}>
        <View style={[styles.container, style]}>
            <Image style={[styles.image, imageStyle]} source={{uri:urlToImage}} />
            <View style={styles.contentContainer}>
            <Title>{title}</Title>
            <SubTitle>{description}</SubTitle>
            </View>
        </View>
        </TouchableWithoutFeedback>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 290,
        borderRadius: 10,
        backgroundColor:'white',
        overflow:'hidden',

    },
    image: {
        borderRadius: 8,
        height:200
    },
    contentContainer:{
        padding:5
    }
});

//make this component available to the app
export default BlockedCard;
