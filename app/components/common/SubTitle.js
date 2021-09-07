//import liraries
import React from 'react';
import { Text } from 'react-native';

// create a component
const SubTitle = ({ children , maxLines = 2, size = 12}) => {
    return <Text numberOfLines={maxLines} style={{ fontSize: size }}>
          { children }
        </Text>
};


//make this component available to the app
export default SubTitle;
