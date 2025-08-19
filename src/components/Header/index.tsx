import { useState } from "react";
import { useFarmer } from "../../contexts/farmerContex";
import { useHarvest } from "../../contexts/harvestContext";
import { FARMERSROUTE, HOMEROUTE } from "../../routes";
import { getFarmers, getHarvests } from "../../services";
import Select from "../Select";
import * as C from "./styles";
// import { FaAnglesDown } from "react-icons/fa6";
import Private from "../Private";

const Header = () => {
  const [showHeader] = useState(true);

  return (
    <>
      {/* <C.TogleButton $showHeader={showHeader} onClick={() => setShowHeader(!showHeader)}>
        <FaAnglesDown />
      </C.TogleButton> */}
      <C.Container $showHeader={showHeader}>
        <Private element={
          <>
            <Select getValue={getFarmers} attributeValue={"name"} useContext={useFarmer} ignoreRoutes={[FARMERSROUTE, HOMEROUTE]}> Produtor: </Select>
            <Select getValue={getHarvests} attributeValue={"year"} useContext={useHarvest}> Safra: </Select>
          </>
        } />
      </C.Container>
    </>
  )
}

export default Header