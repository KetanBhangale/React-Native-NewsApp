//import liraries
import React from 'react';
import BlockedCard from '../cards/BlockedCard';
import { useNavigation } from '@react-navigation/native';

// create a component
const FeaturedNews = ({item}) => {
    const navigation = useNavigation()
    const type ='breaking'
    
    return (
        <>
    {item && 
    <BlockedCard item={item}  style={{marginVertical:15}} onPress={()=> navigation.push('NewsDetails' ,{item, type})} >
    </BlockedCard>}
    
    </>
    )
};


//make this component available to the app
export default FeaturedNews;
