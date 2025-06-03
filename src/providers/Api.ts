import axios from "axios";
// import { Token } from "../types/token";

const baseURL = import.meta.env.VITE_BASE_URL;

// let authTokens : Token = {token: localStorage.getItem('authTokens')} as Token;

export const ApiProvider = axios.create({ 
    baseURL: baseURL,
    withCredentials: true
    // menus: { Authorization: `Bearer ${authTokens?.token}` }
});

// Api.interceptors.request.use(async req => {
//     if (!authTokens){
//         authTokens = {token: localStorage.getItem('authTokens')} as Token;
//         req.menus.Authorization= `Bearer ${authTokens?.token}`;
//     }
//     return req;
// });
