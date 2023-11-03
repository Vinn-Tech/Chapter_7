// import { GoogleLogin } from "@react-oauth/google";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../assets/components/GoogleComponents/GoogleLogin";
import { PostLoginUser } from "../../redux/actions/postLogin";

const LoginPage = () => {
  const [Password, setPassword] = useState("");
  const [Email, setEmail] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const backgroundImageUrl = require("../../assets/img/poster-bg.jpg");
  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setEmail(e.target.value);
      }
      if (e.target.id === "password") {
        setPassword(e.target.value);
      }
    }
  };

  const handleLoginUser = async () => {
    const dataDispatch = await dispatch(
      PostLoginUser({
        email: Email,
        password: Password,
      })
    );

    if (dataDispatch) {
      navigate("/home");
    }
  };

  return (
    <div
      className="flex flex-col justify-center items-center bg-cover bg-center w-full h-screen"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div
        className="absolute w-full top-0 left-0 h-full bg-opacity-60 bg-black"
        style={{ zIndex: 1 }}
      ></div>
      <div
        className="absolute w-full bottom-0 left-0 h-15 bg-gradient-to-t from-black to-transparent"
        style={{ zIndex: 2 }}
      ></div>
      <div
        className="rounded-md bg-gradient-to-r from-rose-600 to-red-400 h-[18.5rem] w-[25rem] flex flex-col items-center shadow-lg shadow-slate-600"
        style={{ zIndex: 3 }}
      >
        <div className="flex flex-col justify-center items-center w-full">
          <h1 className="text-white font-bold text-3xl mt-[1rem] mb-[2rem]">
            Login Here
          </h1>
          <input
            onChange={handleInput}
            id="email"
            type="email"
            className="font-bold border-2 border-slate-600 focus:outline-none px-2 py-1 rounded-md h-[2.5rem] w-[20rem] mb-[1rem]"
            placeholder="Email"
          />
          <input
            onChange={handleInput}
            id="password"
            type="password"
            className="font-bold border-2 border-slate-600 focus:outline-none px-2 py-1 rounded-md h-[2.5rem] w-[20rem]"
            placeholder="Password"
          />
        </div>
        <div className="btn-section">
          {/* <Link to={'/home'}> */}
          <div className="flex flex-row w-[20rem] my-[1rem]">
            <button
              onClick={() => {
                handleLoginUser();
              }}
              className="bg-white hover:bg-rose-400 rounded-md w-[8rem] h-[2.5rem] mr-[1rem] font-bold font-poppins tracking-wider focus:outline-none"
            >
              Login
            </button>
            {/* <GoogleLogin onSuccess={showToast} onError={() => {console.log("Login Failed");}}/> */}
            <GoogleLogin buttonText="Login with Google"/>
            
          </div>
          <div className="flex flex-row justify-center items-center">
            <span>Don't you Have an Account ? </span>
            <button
              onClick={() => {
                navigate("/register");
              }}
              className="ml-[.5rem] font-bold hover:text-white"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
