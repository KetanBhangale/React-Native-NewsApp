//import liraries
import React from 'react';
import VerticalList from './VerticalList';

// create a component
const ScienceNews = ({data, type}) => {
    return <VerticalList header='Science News' data={data} type={type}/>
};


//make this component available to the app
export default ScienceNews;
