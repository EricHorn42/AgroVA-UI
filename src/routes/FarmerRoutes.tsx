import { Route } from "react-router-dom";
import { FARMERSROUTE } from ".";
import Farmers from "../pages/Farmers";
import FarmerCreate from "../pages/Farmers/create";
import FarmerDelete from "../pages/Farmers/delete";
import FarmerUpdate from "../pages/Farmers/update";

const FarmerRoutes = () => {
    return (
        <>
            <Route path={FARMERSROUTE} element={<Farmers />} />
            <Route path={FARMERSROUTE + "/:id"} element={<Farmers />} />
            <Route path={FARMERSROUTE + "/create"} element={<FarmerCreate />} />
            <Route path={FARMERSROUTE + "/delete"} element={<FarmerDelete />} />
            <Route path={FARMERSROUTE + "/update"} element={<FarmerUpdate />} />
        </>
    );
};

export default FarmerRoutes;