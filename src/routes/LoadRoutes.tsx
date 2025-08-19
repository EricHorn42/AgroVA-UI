import { Route } from "react-router-dom";
import { LOADSROUTE } from ".";
import Loads from "../pages/Loads";
import LoadCreate from "../pages/Loads/create";
import LoadDelete from "../pages/Loads/delete";
import LoadUpdate from "../pages/Loads/update";

const LoadRoutes = () => {
    return (
        <>
            <Route path={LOADSROUTE} element={<Loads />} />
            <Route path={LOADSROUTE + "/create"} element={<LoadCreate />} />
            <Route path={LOADSROUTE + "/delete"} element={<LoadDelete />} />
            <Route path={LOADSROUTE + "/update"} element={<LoadUpdate />} />
        </>
    );
};

export default LoadRoutes;