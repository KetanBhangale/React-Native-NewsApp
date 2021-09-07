//import liraries
import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import SubTitle from '../common/SubTitle';
import Title from '../common/Title';


// create a component
const FlatCard = ({style, imageStyle, item, onPress}) => {
    const {title, description, urlToImage} = item
    return (
        <TouchableWithoutFeedback onPress={onPress}>
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
      
       height: 80,
       flexDirection:'row',
       backgroundColor:"#fff",
       borderRadius:8,
       overflow:'hidden',
       alignItems:'center',
       marginBottom:10

    },
    image: {
        height:'100%',
        flex:0.35,
        borderRadius:8,
        marginHorizontal:5

    },
    contentContainer:{
       flex:0.65,
       paddingHorizontal:5
    }
});

//make this component available to the app
export default FlatCard;
