//import liraries
import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';

import SmallCard from '../cards/SmallCard';
import Title from '../common/Title';
import { useNavigation } from '@react-navigation/native';

// create a component
const HorizontalList = ({header, data, type}) => {
    const navigation = useNavigation();
    console.log("type",{type})
    return (
        <>
        
       <View style={styles.listStyle}>
            <Title size={20}>{header}</Title>
            {/* <FlatList data={data} keyExtractor={item => item.id} horizontal showsHorizontalScrollIndicator={false}
            renderItem={({item})=><SmallCard item={item}/>}/> */}

            <FlatList  
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item.title}
                    data={data}  
                    renderItem={({item}) =>  
                        <SmallCard onPress={()=> navigation.push('NewsDetails' ,{item, type})} 
                        item={item}/>} />  
        </View> 
        </>
    );
};

const styles= StyleSheet.create({
    listStyle:{
        marginVertical:15
    }
})
//make this component available to the app
export default HorizontalList;
