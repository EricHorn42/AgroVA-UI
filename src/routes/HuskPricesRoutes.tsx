import { Route } from "react-router-dom";
import { HUSKPRICESROUTE } from ".";
import Private from "../components/Private";
import HuskPrices from "../pages/HuskPrices";
import HuskPriceCreate from "../pages/HuskPrices/create";
import HuskPriceDelete from "../pages/HuskPrices/delete";
import HuskPriceUpdate from "../pages/HuskPrices/update";

const HuskPriceRoutes = () => {
    return (
        <>
            <Route path={HUSKPRICESROUTE} element={<Private element={<HuskPrices />} />} />
            <Route path={HUSKPRICESROUTE + "/create"} element={<Private element={<HuskPriceCreate />} />} />
            <Route path={HUSKPRICESROUTE + "/delete"} element={<Private element={<HuskPriceDelete />} />} />
            <Route path={HUSKPRICESROUTE + "/update"} element={<Private element={<HuskPriceUpdate />} />} />
        </>
    );
};

export default HuskPriceRoutes;