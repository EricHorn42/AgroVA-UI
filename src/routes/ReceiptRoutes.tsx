import { Route } from "react-router-dom";
import { RECEIPTSROUTE } from ".";
import Receipts from "../pages/Receipts";
import ReceiptCreate from "../pages/Receipts/create";
import ReceiptDelete from "../pages/Receipts/delete";
import ReceiptUpdate from "../pages/Receipts/update";

const ReceiptRoutes = () => {
    return (
        <>
            <Route path={RECEIPTSROUTE} element={<Receipts />} />
            <Route path={RECEIPTSROUTE + "/create"} element={<ReceiptCreate />} />
            <Route path={RECEIPTSROUTE + "/delete"} element={<ReceiptDelete />} />
            <Route path={RECEIPTSROUTE + "/update"} element={<ReceiptUpdate />} />
        </>
    );
};

export default ReceiptRoutes;