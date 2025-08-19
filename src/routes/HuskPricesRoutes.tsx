import { Route } from "react-router-dom";
import { HUSKPRICESROUTE } from ".";
import HuskPrices from "../pages/HuskPrices";
import HuskPriceCreate from "../pages/HuskPrices/create";
import HuskPriceDelete from "../pages/HuskPrices/delete";
import HuskPriceUpdate from "../pages/HuskPrices/update";

const HuskPriceRoutes = () => {
    return (
        <>
            <Route path={HUSKPRICESROUTE} element={<HuskPrices />} />
            <Route path={HUSKPRICESROUTE + "/create"} element={<HuskPriceCreate />} />
            <Route path={HUSKPRICESROUTE + "/delete"} element={<HuskPriceDelete />} />
            <Route path={HUSKPRICESROUTE + "/update"} element={<HuskPriceUpdate />} />
        </>
    );
};

export default HuskPriceRoutes;