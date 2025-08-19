import { Route } from "react-router-dom";
import { ANNOTATIONSROUTE } from ".";
import Annotations from "../pages/Annotations";
import AnnotationCreate from "../pages/Annotations/create";
import AnnotationDelete from "../pages/Annotations/delete";
import AnnotationUpdate from "../pages/Annotations/update";

const AnnotationRoutes = () => {
    return (
        <>
            <Route path={ANNOTATIONSROUTE} element={<Annotations />}/>
            <Route path={ANNOTATIONSROUTE + "/create"} element={<AnnotationCreate />}/>
            <Route path={ANNOTATIONSROUTE + "/delete"} element={<AnnotationDelete />}/>
            <Route path={ANNOTATIONSROUTE + "/update"} element={<AnnotationUpdate />}/>
        </>
    );
};

export default AnnotationRoutes;