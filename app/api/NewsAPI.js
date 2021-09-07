import apiClient from './Client'

const getAll=async()=>{
    //const resp = await apiClient.get('/top-headlines?country=us&apiKey=7a0070dd915247bab7d4bf6f34264557')
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7a0070dd915247bab7d4bf6f34264557`)
    .then((resp)=> resp.json())
    .then((response)=>{
        return resp.data.articles
    })
    .catch((error)=>{
        return []
        console.log(`Error: ${error.message}`)
    }) 
}

const getAllNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=7a0070dd915247bab7d4bf6f34264557');
      const json = await response.json();
      
      return json.articles
    } catch (error) {
      console.error(error);
      return []
    } 
  }
  const getAllNewsAxios = async () => {
    try {
        console.log('getAllNewsAxios API Called')
      const response = await apiClient.get('/top-headlines?country=in&apiKey=7a0070dd915247bab7d4bf6f34264557')
      const resp = await response.data.articles;
   
      return resp
    } catch (error) {
      console.error(error);
      return []
    } 
  }

  const getNewsByCategory = async (category) => {
    //   console.log(category)
    //   alert('Hi '+category)
    console.log('getNewsByCategory API Called')
    try {
      const response = await apiClient.get(`/top-headlines?category=${category}&country=in&apiKey=7a0070dd915247bab7d4bf6f34264557`)
      const resp = await response.data.articles;
      console.log(category, resp.length)
      return resp
    } catch (error) {
      console.error(error);
      return []
    } 
  }
export default {
    getAll,
    getAllNews,
    getAllNewsAxios,
    getNewsByCategory
}