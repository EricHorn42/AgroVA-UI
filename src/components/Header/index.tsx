import { getFarmers, getHarvests } from "../../services";
import Select from "../Select";
import * as C from "./styles";

const Header = () => {
  
  return (
    <C.Container>
      <C.Title>Header</C.Title>   
      <Select getValue={getFarmers} attributeValue={"name"}> Produtor: </Select>
      <Select getValue={getHarvests} attributeValue={"year"}> Safra: </Select>
    </C.Container>
  )
}

export default Header