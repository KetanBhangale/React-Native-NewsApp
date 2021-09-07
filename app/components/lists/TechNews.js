//import liraries
import React  from 'react';
import HorizontalList from './HorizontalList';


// create a component
const TechNews = ({data, type}) => {
    return <HorizontalList header='Technology News' data={data} type={type}/>
};



//make this component available to the app
export default TechNews;
