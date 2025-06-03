import { Route } from "react-router-dom";
import { PROMISSORIESROUTE } from ".";
import Private from "../components/Private";
import PromissoryCreate from "../pages/Promissories/create";
import PromissoryDelete from "../pages/Promissories/delete";
import PromissoryUpdate from "../pages/Promissories/update";
import Promissories from "../pages/Promissories";

const PromissoryRoutes = () => {
    return (
        <>
            <Route path={PROMISSORIESROUTE} element={<Private element={<Promissories />} />} />
            <Route path={PROMISSORIESROUTE + "/create"} element={<Private element={<PromissoryCreate />} />} />
            <Route path={PROMISSORIESROUTE + "/delete"} element={<Private element={<PromissoryDelete />} />} />
            <Route path={PROMISSORIESROUTE + "/update"} element={<Private element={<PromissoryUpdate />} />} />
        </>
    );
};

export default PromissoryRoutes;