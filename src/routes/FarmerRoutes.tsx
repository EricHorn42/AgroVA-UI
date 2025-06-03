import { Route } from "react-router-dom";
import { FARMERSROUTE } from ".";
import Private from "../components/Private";
import Farmers from "../pages/Farmers";
import FarmerCreate from "../pages/Farmers/create";
import FarmerDelete from "../pages/Farmers/delete";
import FarmerUpdate from "../pages/Farmers/update";

const FarmerRoutes = () => {
    return (
        <>
            <Route path={FARMERSROUTE} element={<Private element={<Farmers />} />} />
            <Route path={FARMERSROUTE + "/:id"} element={<Private element={<Farmers />} />} />
            <Route path={FARMERSROUTE + "/create"} element={<Private element={<FarmerCreate />} />} />
            <Route path={FARMERSROUTE + "/delete"} element={<Private element={<FarmerDelete />} />} />
            <Route path={FARMERSROUTE + "/update"} element={<Private element={<FarmerUpdate />} />} />
        </>
    );
};

export default FarmerRoutes;