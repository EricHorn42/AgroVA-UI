import { Route } from "react-router-dom";
import { HARVESTSROUTE } from ".";
import Private from "../components/Private";
import Harvests from "../pages/Harvests";
import HarvestCreate from "../pages/Harvests/create";
import HarvestDelete from "../pages/Harvests/delete";
import HarvestUpdate from "../pages/Harvests/update";

const HarvestRoutes = () => {
    return (
        <>
            <Route path={HARVESTSROUTE} element={<Private element={<Harvests />} />} />
            <Route path={HARVESTSROUTE + "/create"} element={<Private element={<HarvestCreate />} />} />
            <Route path={HARVESTSROUTE + "/delete"} element={<Private element={<HarvestDelete />} />} />
            <Route path={HARVESTSROUTE + "/update"} element={<Private element={<HarvestUpdate />} />} />
        </>
    );
};

export default HarvestRoutes;