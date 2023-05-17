import { useLocation, Link } from "react-router-dom";
import PropTypes from 'prop-types';

const Trending = ({items}) => {
   const location = useLocation();
   console.log("Trending, location = ",location);

   return (
      <>
         <ul>
         {items.map((item, index) => (
            <li key={index}>
               <Link to={`/movies/${item.id}`} state={{ from: location }}>
                  
                     {item.title ?? item.name ?? item.original_title}   
                  
               
               </Link>
            </li>
         ))}
         </ul>
      </>
   )
};

export default Trending;

Trending.propTypes = {
   items: PropTypes.array.isRequired,
 };