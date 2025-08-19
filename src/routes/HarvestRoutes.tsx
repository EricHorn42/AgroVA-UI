import { Route } from "react-router-dom";
import { HARVESTSROUTE } from ".";
import Harvests from "../pages/Harvests";
import HarvestCreate from "../pages/Harvests/create";
import HarvestDelete from "../pages/Harvests/delete";
import HarvestUpdate from "../pages/Harvests/update";

const HarvestRoutes = () => {
    return (
        <>
            <Route path={HARVESTSROUTE} element={<Harvests />} />
            <Route path={HARVESTSROUTE + "/create"} element={<HarvestCreate />} />
            <Route path={HARVESTSROUTE + "/delete"} element={<HarvestDelete />} />
            <Route path={HARVESTSROUTE + "/update"} element={<HarvestUpdate />} />
        </>
    );
};

export default HarvestRoutes;