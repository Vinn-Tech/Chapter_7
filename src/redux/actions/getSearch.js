import { reduxGetSearch } from "../../services/search-data-movies";
import { setSearchMovies } from "../reducers/search/authSearch";

export const GetSearchMovies = (query) => (dispatch) => {
  return reduxGetSearch(query).then((result) => {
    console.log(result.data.data, 'hasil search');
    dispatch(setSearchMovies(result.data.data));
  }).catch((err) => {
    console.log(err, 'err search');
  });
}
