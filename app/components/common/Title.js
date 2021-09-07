//import liraries
import React from 'react';
import { Text } from 'react-native';

// create a component
const Title = ({children, maxLines=2, size=15}) => {
    return <Text numberOfLines={maxLines} style={{fontSize:size, fontWeight:'bold'}}>
             {children}
        </Text>
};


//make this component available to the app
export default Title;
