import axios from "axios";
import { CookieKeys, CookieStorage } from "./cookies";

// const Token = sessionStorage.getItem("token") ? sessionStorage.getItem("token") : undefined

const https_binar = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
    timeout: 30000,
    headers: {
      accept: "application/json",
      Authorization:
       `Bearer ${CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : "" }`,
    }
});

export default https_binar