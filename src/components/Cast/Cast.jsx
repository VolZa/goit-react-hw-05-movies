import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../api';
import { Loader } from "components/Loader/Loader";
import { ERROR_MSG } from "constants/constants";
import { List } from "./Cast.styled";

const Cast = () => {
   const [cast, setCast] = useState([]);
   const [error, setError] = useState(false);
   const [isLoading, setIsLoading] = useState(false);

   const { movieId } = useParams();

   useEffect(() => {
      const fetch = async (id) => {
         try {
            setIsLoading(true)
            const result = await API.getCast(id);
            setCast(result.cast);
            setIsLoading(false)
            } catch (error) {
               setError(true)   
               console.error(error);
            }
      };
      fetch(movieId);
   }, [movieId]);

   return(
      <>
         {isLoading ? ( <Loader/>   
         ) : error  ? (
            <h2>{ERROR_MSG['msg']}</h2>
         ) : (
            <section>
               <h2>Cast</h2>
               <List>
                  {!!cast.length ? (
                     cast.map(({ original_name, profile_path, character }, idx) => (
                        <li key={idx}>
                           <img src={profile_path 
                           ?  `https://image.tmdb.org/t/p/w200${profile_path}`
                           : 'https://via.placeholder.com/200x300?text=No+Image'} alt={original_name} />
                           <h3>{original_name}</h3>
                           <p>{character}</p>
                        </li>
                     ))
                     ) : ( <p>Actors not found.</p>)}

               </List>
            </section>
         ) 
         }
         
 

  
      </>
   )
};

export default Cast;

//  {cast.length ? (
//             <ul>  
//                {cast.map(iCast => (
//                   <li key={iCast.cast_id}>
//                      {iCast.name}
//                   </li>
//                ))}
//             </ul>
//          ) : (
//             <h1>Немає каст</h1>
//          )} 

// {cast.map((cast) => (
//    <li key={cast.id}>
//       <img src={cast.profile_path} alt={cast.name} />
//       <h3>{cast.name}</h3>
//       <p>{cast.character}</p>
//    </li>
// ))}