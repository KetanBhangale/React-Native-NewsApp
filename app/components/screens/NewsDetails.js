//import liraries
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from 'react-native';
import HorizontalList from '../lists/HorizontalList';
import APIClinet from '../../api/NewsAPI'
import CloseBtn from '../common/CloseBtn';
import ActivityIndicator from '../common/ActivityIndicator';
import {useNavigation} from '@react-navigation/native'


const {width, height} = Dimensions.get('window')

// create a component
const NewsDetails = (props) => {
   console.log(props.route.params.item)
   console.log(props.route.params.type)
    const [relatedNews, setRelatedNews] = useState([])
    const [loading, setLoader] = useState(false)
   const{title, content, urlToImage} = props.route.params.item
   const type = props.route.params.type

   const navigation = useNavigation()

   const getRelatedNews= async()=>{
       setLoader(true)
        const response = await APIClinet.getAllNewsAxios()
        const filterList = response.filter(item=> item.title !== title)
        setRelatedNews(filterList.slice(0,6))
        setLoader(false)
   }
   const getRelatedNewsByCategory= async(type)=>{
    setLoader(true)
    const response = await APIClinet.getNewsByCategory(type)
    const filterList = response.filter(item=> item.title !== title)
    setRelatedNews(filterList.slice(0,6))
    setLoader(false)
}
   useEffect(()=>{
       if(type==='breaking'){
            getRelatedNews()
       }else{
        getRelatedNewsByCategory(type)
       }
     
   },[])
   
    return (
        <>
        <ActivityIndicator visibile={loading}/>
        <ScrollView>
            <Image style={styles.image} source={{uri: urlToImage}}/>
            <View style={styles.contentContainer}>
            <Text style={styles.text}>{title}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.content}>{content}</Text>
            <Text style={styles.content}>{content}</Text>
            </View>
            {
                console.log(relatedNews.length)
            }
            <View style={styles.relatedNews}>
                <HorizontalList header='Realted News' data={relatedNews} type={type}/>
            </View>
        </ScrollView>
        <CloseBtn onPress={()=>navigation.popToTop()}/>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    image:{
        width: width,
        height: height/3,

    },
    contentContainer:{
        padding:10
    },
    text:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:15
    },
    content:{
        fontSize:16,
        color:'#4e4d4d'
    },
    relatedNews:{
        padding:10
    }
});

//make this component available to the app
export default NewsDetails;
