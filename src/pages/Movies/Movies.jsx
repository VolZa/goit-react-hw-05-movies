// import { useParams } from "react-router-dom";

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import * as API from 'api';
import SearchMovie from 'components/SearchMovie/SearchMovie';
import Trending from 'components/Trending/Trending';
import { Container } from './Movies.styled';


const errorMessage = () => toast.error('Something went wrong. Please try again later.');
const errorAlert = () => toast.error('Nothing was found for this request. Create another one.');

const Movies = () => {
   const [movies, setMovies] = useState([]);
   const [searchParams, setSearchParams] = useSearchParams();
   const movieTitle = searchParams.get('title') ?? '';
   const [title, setTitle] = useState(() => movieTitle ?? '');

   useEffect(() => {
      if  (movieTitle.trim()==="") return;
      const fetch = async () => {
         try {
            const response = await API.searchTitle(movieTitle);
            response.results.length > 0? setMovies(response.results) : errorAlert();
          
         } catch (error) {
            errorMessage();
         }
      };  
      fetch();
   }, [movieTitle]);

   const onSubmit = (e) => {
      e.preventDefault();
      if (title.trim()) {
         console.log(title);
         const params = title === ''? {} : { title };
         setSearchParams(params);
      } else {errorMessage();}
   }
   // const {filmId} = useParams();
   const onChange = e => {
      console.log('onChange спрацював: ', e.target.value);
      setTitle(e.target.value);
   };
   return (
      <Container>
         <SearchMovie title={title} onChange={onChange} onSubmit={onSubmit} />
         {movies.length > 0 ? <Trending items={movies}/> : <div>Nothing was found for this request. Create another one.</div>}
         <ToastContainer />
      </Container>
   )
};

export default Movies;