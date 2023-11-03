import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
// import { toast } from "react-toastify";
// import { CookieKeys, CookieStorage } from "../../../utils/Cookies";
import { useDispatch } from "react-redux";
// import { setToken } from "../../../redux/reducers/auth/authlogin";
import { Navigate, useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setToken } from "../../../redux/reducers/auth/authLogin";
import { setTokenOAuth } from "../../../redux/reducers/googleOAuth/authGoogle";

function GoogleLogin() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerLoginWithGoogleAction = async (accessToken) => {
    try {
      let data = JSON.stringify({
        access_token: accessToken,
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: `${process.env.REACT_APP_SERVER}/api/v1/auth/google`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      const response = await axios.request(config);
      const { token } = response.data.data;

      CookieStorage.set(CookieKeys.AuthToken, token);
      dispatch(setToken(token));
      dispatch(setTokenOAuth(token))
      alert('Sukses')
      navigate('/home')
    } catch (error) {
      alert(error.response.data.message)
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: (responseGoogle) => registerLoginWithGoogleAction(responseGoogle.access_token),
  });

  return (
    <div>
      <button className=" text-black font-bold py-2 px-4" onClick={() => loginWithGoogle()}>
        <button className="bg-red-500 gap-4 px-2 py-2 text-white flex items-center rounded-md">Continue with Google</button>
      </button>
    </div>
  );
}

export default GoogleLogin;