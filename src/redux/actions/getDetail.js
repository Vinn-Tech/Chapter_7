import { reduxGetDetail } from "../../services/get-data-movies-detail"
import { setDetailMovies } from "../reducers/detail/authDetail";


export const GetDetailMovies = (id) => (dispatch) =>{
    return reduxGetDetail(id).then((result) => {
        dispatch(setDetailMovies(result.data.data))
        console.log(result.data.data, 'resul detail')
    }).catch((err) => {
        console.log(err, 'err details')
    });
}