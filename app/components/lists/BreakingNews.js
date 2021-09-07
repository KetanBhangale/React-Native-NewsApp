//import liraries
import React  from 'react';
import HorizontalList from './HorizontalList';


// create a component
const BreakingNews = ({data, type}) => {
    return <HorizontalList header='Breaking News' data={data} type={type}/>
};



//make this component available to the app
export default BreakingNews;
