import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as API from '../../api';

const Cast = () => {
   const [cast, setCast] = useState([]);
   const { id } = useParams();

   useEffect(() => {
      const fetch = async () => {
         try {
            const result = await API.getCast(id);
            setCast(result.cast);
            return;
            } catch (err) {
            console.log(err);
            }
      };
      fetch();
   }, [id]);
   console.log(cast);
   return(
      <>
         {cast.length ? (
            <ul>  
               {cast.map(iCast => (
                  <li key={iCast.cast_id}>
                     {iCast.name}
                  </li>
               ))}
            </ul>
         ) : (
            <h1>Немає каст</h1>
         )}
  
      </>
   )
};

export default Cast;