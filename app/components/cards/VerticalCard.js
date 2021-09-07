//import liraries
import React, { useState } from 'react';
import FlatCard from './FlatCard';
import ViewMore from '../common/ViewMore';
import APIClient from '../../api/NewsAPI'
import {useNavigation} from '@react-navigation/native'

// create a component
const VerticalCard = ({item, onPress}) => {
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
        return <ViewMore onPress={()=>handleViewMore(item.category)} visibility={loading}/>
    }
    return <FlatCard onPress={onPress} item = {item}/>
};

//make this component available to the app
export default VerticalCard;
