import * as API from 'api';
import { Container } from 'components/App/App.styled';
import Details from 'components/Details/Details';
import { Loader } from 'components/Loader/Loader';
import { Suspense, useMemo, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';


const MovieDetails = () => {
   const [movie, setMovie] = useState(null);
   const [status, setStatus] = useState('');
   const {moviesId} = useParams();
   const location = useLocation();

   useMemo(() => {
      const fetch = async () => {
         try {
            const result = await API.searchById(moviesId);
            setMovie(result);
            setStatus(result.status);
            console.log(result);
            // console.log(result.status);
            return;
         } catch (error) {
            console.log("Error fetching in MovieDetails"); //error
         }
         };
         fetch();
      
   }, [moviesId]);
   // console.log("MovieDetails location= ",location);
   // console.log(location?.state?.from ?? '/')
   return (
      <main>
         <Container>
            <Link to={location?.state?.from ?? '/'}>
               <button type="button" >
                  Back
               </button>
            </Link>

            {status !== 'Released' ? (
               <p>
                  Not released!
               </p>
            )
            : (
               <>
                  <Details movie={movie}/>
                  <hr/>
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
            )}
         </Container>
         
      </main>
   )
}

export default MovieDetails;