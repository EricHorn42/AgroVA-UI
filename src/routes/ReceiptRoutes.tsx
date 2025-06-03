import { Route } from "react-router-dom";
import { RECEIPTSROUTE } from ".";
import Private from "../components/Private";
import Receipts from "../pages/Receipts";
import ReceiptCreate from "../pages/Receipts/create";
import ReceiptDelete from "../pages/Receipts/delete";
import ReceiptUpdate from "../pages/Receipts/update";

const ReceiptRoutes = () => {
    return (
        <>
            <Route path={RECEIPTSROUTE} element={<Private element={<Receipts />} />} />
            <Route path={RECEIPTSROUTE + "/create"} element={<Private element={<ReceiptCreate />} />} />
            <Route path={RECEIPTSROUTE + "/delete"} element={<Private element={<ReceiptDelete />} />} />
            <Route path={RECEIPTSROUTE + "/update"} element={<Private element={<ReceiptUpdate />} />} />
        </>
    );
};

export default ReceiptRoutes;