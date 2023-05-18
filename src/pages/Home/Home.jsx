import { useEffect, useState } from 'react';
import Trending from 'components/Trending'
import * as API from 'api'
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';

const Home =()=>{
   const [trending, setTrending] = useState([])
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(false);
   const [searchParams] = useSearchParams();
   const page = Number(searchParams.get('page')) || 1;
   useEffect(()=>{
      const fetchTrending = async page=>{
         try { 
            setIsLoading(true);
            const response = await API.searchTrending(page);
            setTrending(response.results);
            // return;
         }
         catch (error) {
            setError(true);
            console.log("На сторінці Home fetchTrending error: ",error);
         }
         finally {
            setIsLoading(false)
         };
      }
      fetchTrending(page);
   },[page]);


   return (
      <>
         {isLoading  ? (<Loader/>)
            : error ? (
               <p>The file could not be downloaded. Please try again later.</p>)
               : (
               <>
                  <h2>Trending today</h2>
                  <Trending items={trending}/>
               </>  
               )
      }        
      </>
   );   
}

export default Home;