import { Navigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { ReactNode } from "react";

const Private = ({ element } : {element : ReactNode}) => {
    const [cookies] = useCookies(['user', 'token']);
    
    return cookies.token != null && cookies.token.length > 0 ? element : <Navigate to="/" />;
};

export default Private;