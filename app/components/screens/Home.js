//import liraries
import React from 'react';
import BreakingNews from '../lists/BreakingNews';
import Entertainment from '../lists/Entertainment';
import FeaturedNews from '../lists/FeaturedNews';
import ScienceNews from '../lists/ScienceNews';
import Screen from './Screen';
import SearchBar from '../common/SearchBar';
import TechNews from '../lists/TechNews';
import FakeData from '../../../FakeData'
import useNews from '../../hooks/useNews'
import ActivityIndicator from '../common/ActivityIndicator';



//business entertainment general health science sports technology

// const featureData = {id: "2", title: "This is the title no two.This is the title no two.This is the title no two.This is the title no two.This is the title no two.",
//   desc: "Desc is the short form of description and this format is the actual same as our real database.Desc is the short form of description and this format is the actual same as our real database.",
//   thumbnail: "http://lorempixel.com/400/200/", category: "breaking-news"
// }
// const breakingNewsData = FakeData.filter(item=>item.category==='breaking-news')
// const techNewsData = FakeData.filter(item=>item.category==='tech')
// const politicalNewsData = FakeData.filter(item=>item.category==='political')
// const entertainmentNewsData = FakeData.filter(item=>item.category==='entertainment')


// create a component
const Home = () => {

    const[
        featureNews,
        breakingNews,
        entertainmentNews,
        scienceNews,
        technologyNews,
        loading,
    ] = useNews()
    
        return (
          <>
          {console.log('loading',loading)}
          <ActivityIndicator visibile={loading}/>
          <Screen>  
            <SearchBar />
            <FeaturedNews item={featureNews}/>
           <BreakingNews data={breakingNews} type='breaking'/>
           <ScienceNews data ={scienceNews} type='science'/>
            <TechNews data = {technologyNews} type='technology'/>
          <Entertainment data = {entertainmentNews} type='entertainment'/>
           
          </Screen>
         
          </>
    
        );
};


//make this component available to the app
export default Home;
