import { axiosPrivate } from "../providers";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";
import Cookies from "js-cookie";
import { updateToken } from "../services";
import useAuth from "./useAuth";



const useAxiosPrivate = () => {
    const refresh = '';
    const auth  = useAuth();

    useEffect(() => {

        axiosPrivate.interceptors.request.use(config => {
            const token = Cookies.get("Token");


            if (!isTokenExpired() && !config.headers['Authorization']) {
                config.headers.Authorization = `Bearer ${token}`;
            }

            return config;
        });

        axiosPrivate.interceptors.response.use(
            (response) => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 401 && !prevRequest?._retry) {
                    prevRequest._retry = true;
                    const refreshToken = Cookies.get("RefreshToken");
                    
                    if (refreshToken == null) return;

                    const newAccessToken = (await updateToken(refreshToken)).data;
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`

                    if (auth?.setToken)
                        auth?.setToken(newAccessToken);

                    Cookies.set("Token", newAccessToken)

                    return axiosPrivate(prevRequest);
                }
            }
        );


        function isTokenExpired(): boolean {
            try {
                if (!auth || !auth.token || !auth.token.token || auth.token.token != Cookies.get("Token")) return true;
                const decoded: { exp: number } = jwtDecode(auth.token.token);
                const now = Math.floor(Date.now() / 1000);
                return decoded.exp < now;
            } catch {
                return true;
            }
        }

    }, [auth, refresh]
    )

    return axiosPrivate;
}

export default useAxiosPrivate;


