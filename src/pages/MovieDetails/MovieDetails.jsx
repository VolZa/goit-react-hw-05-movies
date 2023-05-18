import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

// import * as API from 'api';
import { fetchMovieById } from 'api';
// import { Container } from 'components/App/App.styled';
import Details from 'components/Details/Details';
import { Loader } from 'components/Loader/Loader';
import { ERROR_MSG } from 'constants/constants';
import { Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  // const [status, setStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const {movieId} = useParams();
  const location = useLocation();
  const { current } = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const getMovieInfo = async id => {
      try {
        setIsLoading(true);
        const result = await fetchMovieById(id);

        setMovie(result);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        console.error(error);
      }
    };

    getMovieInfo(movieId);
   //  console.log("movieId= ",movieId);
  }, [movieId]);
   // console.log("MovieDetails location= ",location);
   // console.log(location?.state?.from ?? '/')
   
   return (
      <main>
         <Container>
            {error ? (
               <div>{ERROR_MSG['msg']}</div>
            ) : isLoading ? (
               <Loader />
            ) : (
               <> 
                  <Link to={current}>
                     <button type="button" >
                        Back
                     </button>
                  </Link>
                     <>
                        <Details movie={movie}/>
                        {/* <hr/> */}
                        <div> 
                           <Link to="cast" state={{from: location?.state?.from ?? '/'}}>
                              Cast
                           </Link>
                           <Link to="reviews" state={{from: location?.state?.from ?? '/'}}>
                              Revievs
                           </Link>
                        </div>

                        <Suspense fallback={<Loader />}>
                           <Outlet />
                        </Suspense>
                     </>
                  {/* )}  */}
               </>
            )}
            
         </Container>
         
      </main>
   )
}

export default MovieDetails;

// useMemo(() => {
//    const fetch = async (id) => {
//       try {
//          setIsLoading(true);
//          const result = await API.searchById(movieId);
//          setMovie(result);
//          setStatus(result.status);
//          setIsLoading(false);
//          console.log(result);
//          // console.log(result.status);
//          return;
//       } catch (error) {
//          setError(true);
//          console.log("Error fetching in MovieDetails", error); //error
//       }
//       };
//       fetch(movieId);
   
// }, [movieId]);