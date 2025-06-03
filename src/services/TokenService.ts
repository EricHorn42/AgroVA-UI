import { ApiProvider } from "../providers";
import { Token } from "../types/shared/Token";
import { UserLogin } from "../types/shared/UserLogin";

export const loginUser = (data : UserLogin) => ApiProvider.post<Token>('api/Token/LoginUser', data);//.then(response => response).catch(error => error);

export const registerUser = (data  : UserLogin) => ApiProvider.post('api/Token/RegisterUser', data);//.then(response => response).catch(error => error);

export const updateToken = () => ApiProvider.post('api/Token/RefreshToken');//.then(response => response).catch(error => error);

export const TokenService = {
    loginUser,
    registerUser,
    updateToken
}
