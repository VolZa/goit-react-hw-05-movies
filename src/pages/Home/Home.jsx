import { useEffect, useState } from 'react';
import Trending from 'components/Trending'
import * as API from 'api'

const Home =()=>{
   const [trending, setTrending] = useState([])
   
   useEffect(()=>{
      const fetchTrending = async ()=>{
         try { 
            const response = await API.searchTrending();
            setTrending(response.results);
            return;
         }
         catch (error) {
            console.log(error)
         }
      };
      fetchTrending();
   },[]);

   return (
      <>
         <Trending items={trending}/>
      </>
   );   
}

export default Home;