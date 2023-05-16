import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import * as API from '../../api';
import { Loader } from 'components/Loader/Loader';

import { Wrapper } from './Reviews.styled';
import { ERROR_MSG } from 'constants/constants';

const Reviews = () => {
  const [viewing, setViewing] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadError, setIsLoadError] = useState(false);
  const { movieId } = useParams(); //ПОвертає об'єкт з усіма динамічними параметрами з поточного URL
  
  // let count = 0;
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const { results } = await API.getReviews(movieId);
        setViewing(results);
        setIsLoading(false);
      } catch (error) {
        setIsLoadError(true);
        console.log(error);
      }
    }
    fetchReviews();
  }, [movieId]);

   console.log(viewing, isLoading, isLoadError);

  return (
    <Wrapper>
      <div>Revievs</div>
      {isLoading && <Loader />}
      {isLoadError && <p>{ERROR_MSG}</p>}
      <div>Rev Rev Revievs</div>
    </Wrapper>
  )
}
export default Reviews;

// {isLoading ? (<Loader/>)
// :   isLoadError ? (
//   <div>{ERROR_MSG['msg']}</div>)
// : ( 
//     <ul>
//     {
//       viewing.map(item => (
//       <li key={item.id}>
//           <img
//             src={
//                   item.author_details.avatar_path
//                   ? item.author_details.avatar_path.includes('http')
//                       ? `https://picsum.photos/200/300?random=${(count += 1)}`
//                       : `https://image.tmdb.org/t/p/original${item.author_details.avatar_path}`
//                   : `https://picsum.photos/200/300?random=${(count += 1)}`
//                 }
//                 alt={item.author}
//                 width="100"
//             />
//           <p>
//             <span>
//                 {item.author ?? item.author_details.username ?? 'Author'}
//             </span>
//             <span>{item.content ?? 'No comments'}</span>
//           </p>
//       </li>
//       )) 
//     }
//     </ul>
// )
// }