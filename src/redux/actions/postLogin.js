// import axios from "axios"
import { LoginWithRedux } from "../../services/auth/post_login_user";
import { CookieKeys, CookieStorage } from "../../utils/cookies";
import { setLoggedIn, setToken, setUser } from "../reducers/auth/authLogin";

export const PostLoginUser = (input) => (dispatch) => {
// redux V3 disimpan di dalam service
  return LoginWithRedux(input).then((result) => {
      CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
      dispatch(setToken(result.data.data.token))
      dispatch(setLoggedIn(true))
      dispatch(setUser(input))
      return true // indikasi login berhasil
  }).catch((err) => {
    console.log(err, 'err')
    alert(err.response.data.message)
    return false // indikasi login gagal
  });
 

// Redux V2 (standard)
  //   https_binar.post(API_ENDPOINTS.LOGIN_USER , input).then((result) => {
  //     console.log(result.data.data.token, "result")
  //     CookieStorage.set(CookieKeys.AuthToken, result.data.data.token);
  //     dispatch(setToken(result.data.data.token))
      
  // }).catch((err) => {
  //     console.log('error', err)
  // });

}

// export default {loginUser}