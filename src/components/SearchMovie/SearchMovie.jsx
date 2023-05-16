import PropTypes from 'prop-types';
import { Wrapper } from './SearchMovie.styled';

const SearchMovie = ({ title, onChange, onSubmit }) => {
   
    return (
        <Wrapper>
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="title"
                  autoComplete="off"
                  value={title}
                  onChange={onChange}
                  autoFocus
               />
               <button type="submit">Search</button>
            </form>
            <h1>Search Movie</h1>
        </Wrapper>
    )
}

export default SearchMovie;

SearchMovie.propTypes = {
   title: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
   onSubmit: PropTypes.func.isRequired,
 };