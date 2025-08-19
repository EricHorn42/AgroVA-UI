import { Navigate, useLocation, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Private = () => {
    const auth = useAuth();
    const location = useLocation()

    return (
        auth?.token?.user
            ? <Outlet />
            : <Navigate to="/" state={{ from: location }} replace />
);
};

export default Private;