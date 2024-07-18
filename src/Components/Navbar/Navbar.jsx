import { FaLinkedin } from "react-icons/fa";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { MdBattery1Bar, MdOutlineBatteryAlert, MdOutlineSignalCellular4Bar, MdSignalWifiStatusbar2Bar } from "react-icons/md";
import { TbSignalLte } from "react-icons/tb";

import './Navbar.css'

function Navbar(){
    return(
        <div className="Container">
            <div className="SecContainer">
                <div className="icons">
                    <div>
                        <span> 10:17</span>
                        <MdOutlineBatteryAlert className='icon' />
                        <FaLinkedin className="iconL" />
                        <FaLinkedin className="iconL" />
                        <FaLinkedin className="iconL" />
                    </div>
                     <div>   
                        <TbSignalLte className="icon"/>
                        <MdSignalWifiStatusbar2Bar className="icon"/>
                        <MdOutlineSignalCellular4Bar className="icon"/>
                        <MdBattery1Bar className="icon"/>
                        <span>10%</span>
                    </div>
                </div>
                <div className="content">
                    <span className="secContent">BBB24</span>
                    <span className="secContent">Live</span>
                    <span className="secContent">Loja</span>
                    <span className="secContent">Seguindo</span>
                    <span className="secContent">Para você</span>
                    <HiMagnifyingGlass className="iconLupa"/>
                </div>                
            </div>
        </div>
    );
}

export default Navbar;