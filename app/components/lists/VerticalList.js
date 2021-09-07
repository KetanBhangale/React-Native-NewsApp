//import liraries
import React  from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Title from '../common/Title';
import VerticalCard from '../cards/VerticalCard';
import { useNavigation } from '@react-navigation/native';

// create a component
const VerticalList = ({header, data, type}) => {
    console.log('vertical type=',type)
    const navigation = useNavigation();
    return (
        <View>
            {header && <Title size={20}>{header}</Title>}
            <View style={styles.container}> 
            {
                data.map((item,index)=>
                <VerticalCard 
                onPress={()=> navigation.push('NewsDetails' ,{item, type})} 
                item={item} key={index}/>)
            }
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        marginVertical:15
    },
});

//make this component available to the app
export default VerticalList;
