import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '63646d6cb2d06c3444ba8e63d051cd70';

axios.defaults.baseURL = BASE_URL;

export const searchTrending = async () => {
   const res = await axios.get(`/trending/all/day?api_key=${API_KEY}`);
   return res.data;
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