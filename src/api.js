import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '63646d6cb2d06c3444ba8e63d051cd70';

axios.defaults.baseURL = BASE_URL;

//популярні фільми
export const searchTrending = async () => {
   const result = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
   return result.data;
 };

 export const searchById = async id => {
  const result = await axios.get(`/movie/${id}?api_key=${API_KEY}`);
  return result.data;
};

//отримання списку фільмів за запитом 
 export const searchTitle = async (title) => {
  const result = await axios.get(`/search/movie?api_key=${API_KEY}&query=${title}`);
  return result.data;
 };

 export const getReviews = async movieId => {
  const result = await axios.get(
    `/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return result.data;
};

export const getCast = async id => {
  const {data} = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

//  trending/all/day?api_key=<<api_key>>
// /trending/all/week?api_key=

// {
//    "iso_3166_1": "UA",
//    "english_name": "Ukraine"
//  },
//  GET
//  /configuration/languages
//  {
//    "iso_639_1": "uk",
//    "english_name": "Ukrainian",
//    "name": "Український"
//  },

//  https://api.themoviedb.org/3/configuration/timezones?api_key=<<api_key>>
//  {
//    "iso_3166_1": "UA",
//    "zones": [
//      "Europe/Kiev",
//      "Europe/Uzhgorod",
//      "Europe/Zaporozhye"
//    ]
//  },