import { Route } from "react-router-dom";
import { LOADSROUTE } from ".";
import Private from "../components/Private";
import Loads from "../pages/Loads";
import LoadCreate from "../pages/Loads/create";
import LoadDelete from "../pages/Loads/delete";
import LoadUpdate from "../pages/Loads/update";

const LoadRoutes = () => {
    return (
        <>
            <Route path={LOADSROUTE} element={<Private element={<Loads />} />} />
            <Route path={LOADSROUTE + "/create"} element={<Private element={<LoadCreate />} />} />
            <Route path={LOADSROUTE + "/delete"} element={<Private element={<LoadDelete />} />} />
            <Route path={LOADSROUTE + "/update"} element={<Private element={<LoadUpdate />} />} />
        </>
    );
};

export default LoadRoutes;