import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import * as C from "../styles/global";

import Home from "../pages/Home";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

import Private from "../components/Private";

import AnnotationRoutes from "./AnnotationRoutes";
import FarmerRoutes from "./FarmerRoutes";
import HarvestRoutes from "./HarvestRoutes";
import HuskpriceRoutes from "./HuskPricesRoutes";
import LoadRoutes from "./LoadRoutes";
import PromissoryRoutes from "./PromissoryRoutes";
import ReceiptRoutes from "./ReceiptRoutes";
import RentRoutes from "./RentRoutes";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import Signout from "../pages/Signout";

export const ANNOTATIONSROUTE = "/annotations";
export const FARMERSROUTE = "/farmers";
export const HARVESTSROUTE = "/harvests";
export const HOMEROUTE = "/home";
export const HUSKPRICESROUTE = "/huskprices";
export const LOADSROUTE = "/loads";
export const PROMISSORIESROUTE = "/promissories";
export const RECEIPTSROUTE = "/receipts";
export const RENTSROUTE = "/rents";
export const SIGNUPROUTE = "/signup";
export const SETTINGSROUTE = "/settings";
export const SUPPORTROUTE = "/suport";
export const SIGNOUTROUTE = "/singout";


const RoutesApp = () => {
  return (
    <C.Container>

      <Fragment>
        <Routes>
          <Route path={HOMEROUTE} element={<Private element={<Home />} />} />
          <Route path="/" element={<Signin />} />
          <Route path={SIGNUPROUTE} element={<Signup />} />
          <Route path="*" element={<Signin />} />
          <Route path={SIGNOUTROUTE} element={<Private element={<Signout />} />} />
          <Route path={SETTINGSROUTE} element={<Private element={<Settings />} />} />
          <Route path={SUPPORTROUTE} element={<Private element={<Support />} />} />
          {AnnotationRoutes()}
          {FarmerRoutes()}
          {HarvestRoutes()}
          {HuskpriceRoutes()}
          {LoadRoutes()}
          {PromissoryRoutes()}
          {ReceiptRoutes()}
          {RentRoutes()}
        </Routes>
      </Fragment>
    </C.Container>
  );
};

export default RoutesApp;
