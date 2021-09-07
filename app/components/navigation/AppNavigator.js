//import liraries
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from '../screens/Home'
import NewsDetails from '../screens/NewsDetails'
import NewsList from '../screens/NewsList'
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { ScreenStackHeaderLeftView } from 'react-native-screens';

const Stack = createNativeStackNavigator()

// create a component
const AppNavigator = () => {
    useEffect(()=>{
        SplashScreen.hide()
    })
    return (
    <Stack.Navigator screenOptions={{
        headerTitle:'',
        headerShadowVisible:false,
        headerTransparent: true,
        headerTintColor: 'white',
     
    }}>
        <Stack.Screen name ='Home' component={Home}/>
        <Stack.Screen name = 'NewsDetails' component={NewsDetails}/>
        <Stack.Screen name ='NewsList' component={NewsList}/>
    </Stack.Navigator>
    )
};

// define your styles
const styles = StyleSheet.create({
    container: {
       
    },
});

//make this component available to the app
export default AppNavigator;
