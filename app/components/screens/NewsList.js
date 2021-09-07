//import liraries
import React  from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import VerticalList from '../lists/VerticalList';

// create a component
const NewsList = (props) => {
    const data = props.route.params.response
    const type = props.route.params.category
    const headerTitle = type==='breaking'? type.toUpperCase()+' NEWS' : type.toUpperCase()
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.header}>{headerTitle}</Text>
        </View>
        <ScrollView contentContainerStyle={{padding:15}} showsVerticalScrollIndicator={false}>
            
                <VerticalList data={data} type={type}/>
           
        </ScrollView>
        </>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height:50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    header:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        
    }
});

//make this component available to the app
export default NewsList;
