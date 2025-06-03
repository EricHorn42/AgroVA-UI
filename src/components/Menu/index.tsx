import * as C from "./styles.ts";
import {
    FaHome,
    FaRegSun,
    FaUserAlt,
    FaClipboardList,
    FaRegFileAlt,
    FaRegCalendarAlt,
    FaChartBar,
    FaMoneyCheckAlt,
    FaCommentDots,
    FaBarcode,
    FaBalanceScale
} from "react-icons/fa";
import {
    FaArrowRightFromBracket,
    FaPeopleGroup
} from "react-icons/fa6";

import { useCookies } from "react-cookie";
import { useState } from "react";
import * as Routes from "../../routes/index.tsx";
import MenuItem from "../MenuItem/index.tsx";
import MenuSection from "../MenuSections/index.tsx";
import Logotipo from "../../assets/sLogotipo.svg";
import LogoHorizontal from "../../assets/sLogoHorizontal.svg"


const Menu = () => {
    const [cookies] = useCookies(['user', 'token']);
    const [showMenu, setShowMenu] = useState(false);

    return (
        <C.Container $sidebar={showMenu} onMouseEnter={() => setShowMenu(true)} onMouseLeave={() => setShowMenu(false)}>

            <MenuSection itens={
                <C.LogoWrapper>
                    <img src={Logotipo} className={showMenu ? 'hidden' : 'visible'} />
                    <img src={LogoHorizontal} className={showMenu ? 'visible' : 'hidden'} />
                </C.LogoWrapper>
            } />


            <MenuSection itens={
                <>
                    <C.Link to={Routes.HOMEROUTE}> <MenuItem Icon={<FaHome />} ShowText={showMenu} Text="Home" /></C.Link>
                    <C.Link to={Routes.ANNOTATIONSROUTE} > <MenuItem Icon={<FaClipboardList />} ShowText={showMenu} Text="Anotações" /> </C.Link>
                    <C.Link to={Routes.FARMERSROUTE} > <MenuItem Icon={<FaPeopleGroup />} ShowText={showMenu} Text="Produtores" /> </C.Link>
                    <C.Link to={Routes.HARVESTSROUTE} > <MenuItem Icon={<FaRegCalendarAlt />} ShowText={showMenu} Text="Safras" /> </C.Link>
                    <C.Link to={Routes.HUSKPRICESROUTE} > <MenuItem Icon={<FaBalanceScale />} ShowText={showMenu} Text="Preço Casca" /> </C.Link>
                    <C.Link to={Routes.LOADSROUTE} > <MenuItem Icon={<FaRegFileAlt />} ShowText={showMenu} Text="Cargas" /> </C.Link>
                    <C.Link to={Routes.PROMISSORIESROUTE} > <MenuItem Icon={<FaBarcode />} ShowText={showMenu} Text="Notas" /> </C.Link>
                    <C.Link to={Routes.RECEIPTSROUTE} > <MenuItem Icon={<FaChartBar />} ShowText={showMenu} Text="Recibos" /> </C.Link>
                    <C.Link to={Routes.RENTSROUTE} > <MenuItem Icon={<FaMoneyCheckAlt />} ShowText={showMenu} Text="Empréstimos" /> </C.Link>
                </>
            } />


            <MenuSection itens={
                <>
                    <C.Link to={Routes.SETTINGSROUTE} > <MenuItem Icon={<FaRegSun />} ShowText={showMenu} Text="Configurações" /> </C.Link>
                    <C.Link to={Routes.SUPPORTROUTE} > <MenuItem Icon={<FaCommentDots />} ShowText={showMenu} Text="Suporte" /> </C.Link>
                    <C.Link to={Routes.SIGNOUTROUTE} > <MenuItem Icon={<FaArrowRightFromBracket />} ShowText={showMenu} Text="Sair" /> </C.Link>
                </>
            } />


            <MenuSection itens={
                <MenuItem Icon={<FaUserAlt />} ShowText={showMenu} Text={cookies.user} />
            } hasBaseLine={false} />
        </C.Container>
    );
};

export default Menu;