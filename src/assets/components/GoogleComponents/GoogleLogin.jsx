import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { CookieKeys, CookieStorage } from "../../../utils/cookies";
import { setToken } from "../../../redux/reducers/auth/authLogin";
import { Button } from "react-bootstrap";
import { setTokenOAuth } from "../../../redux/reducers/googleOAuth/authGoogle";
import GoogleLogo from "../../img/google-logo.png";

function GoogleLogin({buttonText}) {
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
     <div className="flex flex-row">
          <button onClick={() => loginWithGoogle()} className="bg-white hover:bg-rose-400 rounded-md w-[13rem] h-[2.5rem] font-bold font-poppins tracking-wider focus:outline-none flex justify-center items-center">
            {buttonText} <img src={GoogleLogo} alt="Google Logo" style={{ width: "24px", height: "24px", marginLeft: "10px" }}/>
        </button>
        </div>
  );
}

export default GoogleLogin;