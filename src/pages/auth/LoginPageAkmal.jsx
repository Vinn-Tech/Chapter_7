import React, { useEffect, useState } from "react";
// import { useLoginUser } from "../../services/auth/Login_User";
// import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import GoogleLogin from "../../assets/component/google/googlelogin";
import { useDispatch, useSelector } from "react-redux";
// import { LoginUser } from "../../redux/action/authLogin";
import { PostLoginUser } from "../../redux/actions/postLogin";

export const Loginpage = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  // const { mutate: Login, isSuccess, data, error, isError, status } = useLoginUser();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const Data = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // console.log(Data, "dataLoginuser");

  const handleInput = (e) => {
    if (e) {
      if (e.target.id === "email") {
        setemail(e.target.value);
      }
      if (e.target.id === "password") {
        setpassword(e.target.value);
      }
    }
  };

  // if (isSuccess && data) {
  //   sessionStorage.setItem("token", data.data.data.token);
  // }

  const showpass = () => {
    setShowPassword(!showPassword);
  };

  const Login = async () => {
    const success = await dispatch(
      PostLoginUser({
        email: email,
        password: password,
      })
    );
    if (success) {
      navigate("/home");
    }
  };

  // const handleLoginUser = async () => {
  //   const success = await dispatch(LoginAct(formData));
  //   if (success) {
  //     navigate("/");
  //   }
  // };

  // useEffect(() => {
  //   if (Login) {
  //     toast.success("Anda berhasil login");
  //     navigate("/halaman");
  //   }
  // }, [Data]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black">
      <h1 className="text-2xl font-bold mb-4 text-white">Login</h1>
      <div className="w-1/4">
        <input id="email" onChange={handleInput} type="email" placeholder="Email" className="w-full p-2 mb-2 border rounded"></input>
        <div className="relative">
          <input id="password" onChange={handleInput} type={showPassword ? "text" : "password"} placeholder="Password" className="w-full p-2 mb-2 border rounded"></input>
          <span className="absolute right-3 top-3 cursor-pointer" onClick={showpass}>
            {showPassword ? "Hide" : "Show"}
          </span>
        </div>
        <button
          className="w-full p-2 bg-red-500 text-white rounded-md"
          onClick={() => {
            Login();
          }}
        >
          Login
        </button>
      </div>
      <div>
        <GoogleLogin />
      </div>
      <div className="bg-red-500 py-2 px-4 rounded-md">
        <span className="flex justify-center items-center text-white">
          Don't have an account?
          <span
            className="px-2 cursor-pointer underline underline-offset-2 text-white"
            onClick={() => {
              navigate("/Register");
            }}
          >
            Sign Up
          </span>
        </span>
      </div>
    </div>
  );
};