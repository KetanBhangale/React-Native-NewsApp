//import liraries
import React, { useState } from 'react';
import { View,StyleSheet, Dimensions, ActivityIndicator } from 'react-native';
import BlockedCard from './BlockedCard';
import ViewMore from '../common/ViewMore';
import APIClient from '../../api/NewsAPI'
import {useNavigation} from '@react-navigation/native'



const {width} = Dimensions.get('window')
// create a component
const SmallCard = ({item, onPress}) => {
    //console.warn({item})
    const [loading, setLoader] = useState(false)
    const navigation = useNavigation()
    const handleViewMore=async (category)=>{
        setLoader(true)
        if(category==='breaking'){
            const response = await APIClient.getAllNewsAxios()
            navigation.navigate('NewsList', {response,category})

        }else {
            const response = await APIClient.getNewsByCategory(category)
            navigation.navigate('NewsList', {response, category})
        }
        setLoader(false)
    }

    if(item.title==='View More'){
        return (
            <>
            <View style={styles.viewmore}>
            
            <ViewMore style={styles.viewmore} onPress={()=>handleViewMore(item.category)} visibility={loading}/>
            </View>
            </>
        )
    }
    return <BlockedCard onPress={onPress} style={styles.container} imageStyle={styles.image} item={item}/>
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: width/2,
        marginRight:15,
        height: 190
    },
    image:{
        height: 100
    },
    viewmore: {
        width: width/2,
        height: 190
    },
});

//make this component available to the app
export default SmallCard;
