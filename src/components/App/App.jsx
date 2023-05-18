
import {  Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import { Loader } from "components/Loader/Loader";
import SharedLayout from "components/SharedLayout/SharedLayout";

const Cast = lazy(() => import ("components/Cast/Cast")) ;
const Reviews = lazy(() => import ("components/Reviews/Reviews"));
const Home = lazy(() =>  import ("pages/Home/Home"));
const MovieDetails  = lazy(() => import ( "pages/MovieDetails/MovieDetails"));
const Movies = lazy(() => import ("pages/Movies/Movies"));
const NotFound = lazy(() => import ("pages/NotFound/NotFound"));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
      <Routes>
        <Route path="/" element={<SharedLayout/>}> 
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />       
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
