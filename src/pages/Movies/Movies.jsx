import { useParams } from "react-router-dom";

const Movies = () => {
   const {filmId} = useParams();

   return (
      <>
         <div>Сторінка Movies with filmId - {filmId}</div>
      </>
   )
}

export default Movies;