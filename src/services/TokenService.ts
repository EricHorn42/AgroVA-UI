import { axiosPrivate } from "../providers";
import { Token } from "../types/shared/Token";
import { UserLogin } from "../types/shared/UserLogin";

export const loginUser = (data: UserLogin) => axiosPrivate.post<Token>('api/Token/LoginUser', data);//.then(response => response).catch(error => error);

export const registerUser = (data: UserLogin) => axiosPrivate.post('api/Token/RegisterUser', data);//.then(response => response).catch(error => error);

export const updateToken = (refreshToken: string) => axiosPrivate.post('api/Token/RefreshToken',{}, {headers: {refreshtoken: refreshToken}});//.then(response => response).catch(error => error);

export const authMe = () => axiosPrivate.post('api/Token/me');//.then(response => response).catch(error => error);

// export const updateToken = () => {
//     ApiProvider.post('api/Token/RefreshToken').then((resopnse) => {
//         const data = resopnse.data;
//         const setCookie = useCookies(['user', 'token'])[1];
//         setCookie("user", jwtDecode<JwtToken>(data.token ?? "").name);
//         setCookie("Token", data.token);
//     }).catch(err => console.log(err));
// }

export const TokenService = {
    loginUser,
    registerUser,
    updateToken
}
