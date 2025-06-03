import { createContext, useEffect, useState } from "react";
import { TokenService } from "../services/TokenService";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import { AuthContextType } from "../types/api/Auth";
import { UserLogin } from "../types/shared/UserLogin";
import { useCookies } from "react-cookie";
import axios from "axios";
import { JwtToken } from "../types/shared/JwtToken";

const AuthContext = createContext<AuthContextType | null>({});

export default AuthContext;

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [cookies, setCookie] = useCookies(['user', 'token']);
  const navigate = useNavigate()
  const [loading, setLoading] = useState(true);
  /*
  const [authTokens, setAuthTokens] = useState<Token>(() => {
    const tokenStr = localStorage.getItem('authTokens');
    try {
      return { token: tokenStr } as Token;
    } catch {
      return {} as Token;
    }
  });
  */

  useEffect(() => {
    if (cookies) {
      // setUser({ token: authTokens?.token } as TokenBack);
    }
    setLoading(false);
  }, [cookies, loading]);


  const signin = async (userLogin: UserLogin): Promise<unknown |Error> => {
    try {
      const response = await TokenService.loginUser({ email: userLogin.email, password: userLogin.password });
      const data = await response.data;

      setCookie("user", jwtDecode<JwtToken>(data.token??"").name);
      setCookie("token", data.token)
      // if (!userLogin) updateToken();

      // if (response.status === 200) {
      //   setAuthTokens(data)
      //   setUser({ data, email: userLogin.email } as TokenBack)
      //   localStorage.setItem('authTokens', JSON.stringify(data))
      // } else {
      //   alert('Something went wrong!')
      // }

      return;
    } catch (error: unknown) {
      if (axios.isAxiosError(error))
        return new Error(error.response?.data);
      return new Error("Erro desconhecido");
    };
  };
/*
  const updateToken = async () => {

    const response = await TokenService.updateToken();

    const data = await response.data.json()

    if (response.status === 200) {
      setAuthTokens(data)
      setUser(jwtDecode(data.access))
      localStorage.setItem('authTokens', JSON.stringify(data))
    } else {
      signout()
    }

    if (loading) {
      setLoading(false)
    }
  }
*/
  const signup = async (userLogin: UserLogin) => {
    try {
      const response = await TokenService.registerUser({ email: userLogin.email, password: userLogin.password });

      if (response.status === 200) {
        return response;
      }
      else if (response.status === 400) {
        return response?.data?.errors?.Error ?? "Não foi possivel cadastrar o usuário.";
      }

    } catch (error) {
      console.log(error);
      return error;
    };
  };

  const signout = () => {
    // setAuthTokens({})
    // setUser({})
    setCookie("token",[]);
    setCookie("user",[]);
    // localStorage.removeItem('authTokens')
    navigate('/');
  };

  return (
    <AuthContext.Provider
      value={{ signin: signin, signout: signout, signup: signup }}
    >
      {loading ? null : children}
      {/* {children} */}
    </AuthContext.Provider>
  );
};
