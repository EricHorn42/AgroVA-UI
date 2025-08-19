import { Route } from "react-router-dom";
import { PROMISSORIESROUTE } from ".";
import PromissoryCreate from "../pages/Promissories/create";
import PromissoryDelete from "../pages/Promissories/delete";
import PromissoryUpdate from "../pages/Promissories/update";
import Promissories from "../pages/Promissories";

const PromissoryRoutes = () => {
    return (
        <>
            <Route path={PROMISSORIESROUTE} element={<Promissories />} />
            <Route path={PROMISSORIESROUTE + "/create"} element={<PromissoryCreate />} />
            <Route path={PROMISSORIESROUTE + "/delete"} element={<PromissoryDelete />} />
            <Route path={PROMISSORIESROUTE + "/update"} element={<PromissoryUpdate />} />
        </>
    );
};

export default PromissoryRoutes;