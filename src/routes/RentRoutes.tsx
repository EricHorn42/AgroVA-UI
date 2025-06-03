import { Route } from "react-router-dom";
import { RENTSROUTE } from ".";
import Private from "../components/Private";
import Rents from "../pages/Rents";
import RentCreate from "../pages/Rents/create";
import RentDelete from "../pages/Rents/delete";
import RentUpdate from "../pages/Rents/update";

const RentRoutes = () => {
    return (
        <>
            <Route path={RENTSROUTE} element={<Private element={<Rents />} />} />
            <Route path={RENTSROUTE + "/create"} element={<Private element={<RentCreate />} />} />
            <Route path={RENTSROUTE + "/delete"} element={<Private element={<RentDelete />} />} />
            <Route path={RENTSROUTE + "/update"} element={<Private element={<RentUpdate />} />} />
        </>
    );
};

export default RentRoutes;