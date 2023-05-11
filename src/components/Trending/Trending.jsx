import { useLocation, Link } from "react-router-dom";

const Trending = ({items}) => {
   const location = useLocation();
   // let theNumber = 0;
   return (
      <>
       <ul>
         {items.map((item, index) => (
            <li key={index}>
               <Link to={`/${location.pathname}/${item.id}`}>{item.title}</Link>
            </li>
         ))}
       </ul>
      </>
   )
};

export default Trending;