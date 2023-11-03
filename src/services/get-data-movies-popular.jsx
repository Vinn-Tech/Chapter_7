import { useQuery } from "@tanstack/react-query";
import { API_ENDPOINTS } from "../utils/api-endpoints";
import https3 from "../utils/https3";

export const reduxGetMoviePopular = async (page) => {
  return await https3.get(`${API_ENDPOINTS.POPULAR}?page=${page ? page : 1}`);
}


const fetchDataMoviesPopular = async ({ queryKey }) => {
  // Versi-3
  // const { data } = await https.get(`${API_ENDPOINTS.NOW_PLAYING}?language=en-US&page=${page ? page : 1}`)
  // return data

  // Versi-4
  // console.log(queryKey, "queryKey")
  const [_key, _params] = queryKey;
  const { data } = await https3.get(_key, { params: _params });
  return data;
};

// Versi-3
// const useDataMovieQuery = (page) =>{
//     return (
//         useQuery(["user data", page], () => fetchDataMovies(page))
//         )
// };

// Versi-4
const useDataMovieQueryPopular = (options) => {
  return useQuery([API_ENDPOINTS.POPULAR, options], fetchDataMoviesPopular);
};

// const fetchDataMoviesPopular = async(page) => {
//     const { data } = await https3.get(`${API_ENDPOINTS.POPULAR}?language=en-US&page=${page ? page : 1}`)
//     return data
// }

// const useDataMovieQueryPopular = (page) =>{
//     return (
//         useQuery(["user data", page], () => fetchDataMoviesPopular(page))
//         )
// };

export {fetchDataMoviesPopular, useDataMovieQueryPopular}