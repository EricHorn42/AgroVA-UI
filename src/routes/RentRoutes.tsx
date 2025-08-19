import { Route } from "react-router-dom";
import { RENTSROUTE } from ".";
import Rents from "../pages/Rents";
import RentCreate from "../pages/Rents/create";
import RentDelete from "../pages/Rents/delete";
import RentUpdate from "../pages/Rents/update";

const RentRoutes = () => {
    return (
        <>
            <Route path={RENTSROUTE} element={<Rents />} />
            <Route path={RENTSROUTE + "/create"} element={<RentCreate />} />
            <Route path={RENTSROUTE + "/delete"} element={<RentDelete />} />
            <Route path={RENTSROUTE + "/update"} element={<RentUpdate />} />
        </>
    );
};

export default RentRoutes;