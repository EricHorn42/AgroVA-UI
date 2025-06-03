import { Route } from "react-router-dom";
import { ANNOTATIONSROUTE } from ".";
import Private from "../components/Private";
import Annotations from "../pages/Annotations";
import AnnotationCreate from "../pages/Annotations/create";
import AnnotationDelete from "../pages/Annotations/delete";
import AnnotationUpdate from "../pages/Annotations/update";

const AnnotationRoutes = () => {
    return (
        <>
            <Route path={ANNOTATIONSROUTE} element={<Private element={<Annotations />} />} />
            <Route path={ANNOTATIONSROUTE + "/create"} element={<Private element={<AnnotationCreate />} />} />
            <Route path={ANNOTATIONSROUTE + "/delete"} element={<Private element={<AnnotationDelete />} />} />
            <Route path={ANNOTATIONSROUTE + "/update"} element={<Private element={<AnnotationUpdate />} />} />
        </>
    );
};

export default AnnotationRoutes;