import React, {useEffect, useState } from 'react';
import NewsAPI from '../api/NewsAPI'
export default useNews=()=>{
  const [featureNews, setFeatureNews] = useState();
  const [breakingNews, setBreakingNews] = useState([]);
  const [entertainmentNews, setEntertainmentNews] = useState([]);
  const [scienceNews, setScienceNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [loading, setLoader] = useState(false)
  const qty=5

  const getFeatureNew = async () => {
    setLoader(true)
      const response = await NewsAPI.getAllNewsAxios();
      const firstNews = response[0]
      setFeatureNews(firstNews)
      console.log('featureNews=',featureNews)
      setLoader(false)
  }

  const getBreakingNews = async () => {
    setLoader(true)
      const response = await NewsAPI.getAllNewsAxios();
      const newList = response.slice(1, qty+1)
      if(newList.length){
        newList.push({title: 'View More', description: "View More", urlToImage: "", category:'breaking'})
    }
      setBreakingNews(newList)
      setLoader(false)
  }

  const getNewsByCategory = async (category) => {
    setLoader(true)
    const response = await NewsAPI.getNewsByCategory(category);
    const resp = response.slice(0, qty)
    if(resp.length){
        resp.push({title: 'View More', description: "View More", urlToImage: "", category: category})
    }
    
    if(category==='entertainment'){
      setEntertainmentNews(resp)
    }else if(category==='science'){
      setScienceNews(resp)
    }else if(category==='technology'){
      setTechnologyNews(resp)
    }
    setLoader(false)
}

const hello=(hello)=>{
  alert(hello)
}

  useEffect(() => {
     getFeatureNew()
     getBreakingNews()
     getNewsByCategory('entertainment')
     getNewsByCategory('science')
     getNewsByCategory('technology')
    
    //hello("Hello")

  },[]);

  return[
      featureNews,
      breakingNews,
      entertainmentNews,
      scienceNews,
      technologyNews,
      loading,
  ]
}