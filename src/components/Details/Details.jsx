import { Loader } from 'components/Loader/Loader';
import PropTypes from 'prop-types';
import { Content } from './Details.styled';
const Details = ({movie, isFetch}) => {
   if (!movie) return;
   const {
      poster_path,
      release_date,
      original_title,
      overview,
      // genres,
      vote_average,
    } = movie;
    const userScore = Math.ceil(vote_average) *10;
    const ralase_year = new Date(release_date).getFullYear();
    const url = poster_path
    ? `https://image.tmdb.org/t/p/w400/${poster_path}`
    : 'https://via.placeholder.com/400x600.png?text=Poster+Not+Available';

    return (
      <>
        {isFetch? (
            <Loader/>   
         ) : (
            <section>
               <Content >
                  <img src={url} alt={original_title} width={400} heigh={600}/>
                  <div>
                     <div>
                        <h2>{original_title} ({ralase_year})</h2>

                        <p>User Score: {userScore}%</p>
                        <h2>Overview</h2>
                        <p>{overview}</p>
                        {/* <h2>Genres</h2> */}
                        {/* <p>{genres.map(({ name }) => name).join(', ')}</p> */}
                     </div>
                  </div>
               </Content>
            </section>  
         )}
      </>
   )
   
}

export default Details;
Details.propType = {
   movie: PropTypes.shape({
     poster_path: PropTypes.string.isRequired,
     release_date: PropTypes.string.isRequired,
     original_title: PropTypes.string.isRequired,
     overview: PropTypes.string.isRequired,
     genres: PropTypes.number.isRequired,
     vote_average: PropTypes.string.isRequired,
   }).isRequired,
   isFetch: PropTypes.bool.isRequired,
 };