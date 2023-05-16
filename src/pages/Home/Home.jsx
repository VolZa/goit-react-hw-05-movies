import { useEffect, useState } from 'react';
import Trending from 'components/Trending'
import * as API from 'api'
import { Loader } from 'components/Loader/Loader';

const Home =()=>{
   const [trending, setTrending] = useState([])
   const [isLoading, setIsLoading] = useState(true);
   const [error, setError] = useState(false);
   useEffect(()=>{
      const fetchTrending = async ()=>{
         try { 
            const response = await API.searchTrending();
            setTrending(response.results);
            return;
         }
         catch (error) {
            setError(true);
         }
         finally {
            setIsLoading(false)
         };
      }
      fetchTrending();
   },[]);

   return (
      <>
         {isLoading  ? (<Loader/>)
            : error ? (
               <p>The file could not be downloaded. Please try again later.</p>)
               : ( <Trending items={trending}/>)
      }        
      </>
   );   
}

export default Home;