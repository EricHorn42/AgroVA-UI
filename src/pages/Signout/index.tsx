import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Signout = () => {
    const navigate = useNavigate();

    const signout = useAuth()?.signout;

    return (
        <>
            {signout && signout()}
            {navigate("/")}
        </>
    );
}

export default Signout;