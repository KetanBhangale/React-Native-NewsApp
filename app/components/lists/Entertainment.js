//import liraries
import React from 'react';
import VerticalList from './VerticalList';

// create a component
const Entertainment = ({data, type}) => {
    return <VerticalList header='Entertainment News' data={data} type={type}/>
};


//make this component available to the app
export default Entertainment;
