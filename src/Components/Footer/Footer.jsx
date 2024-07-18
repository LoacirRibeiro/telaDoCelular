import React from "react";
import './Footer.css';
import { PiHouseFill } from "react-icons/pi";
import { LuUser } from "react-icons/lu";
import { IoAddCircleOutline, IoNotificationsOutline } from "react-icons/io5";
import { LiaGamepadSolid } from "react-icons/lia";

function Footer(){
    return(
        <div className="containerFooter">
            <div className="footerDiv">
                <div className="iconsDiv">
                    <div className="icones">
                        <PiHouseFill  className="iconFooter"/>
                        <div >
                            <span className="spanFooter">Início</span>
                        </div>
                    </div>
                    <div className="icones">
                        <LiaGamepadSolid className="iconFooter"/>
                        <div>
                            <span className="spanFooter">Jogo</span>
                        </div>
                    </div>
                    <div className="icones">
                        <IoAddCircleOutline  className="iconFooters"/>
                    </div>
                    <div className="icones">
                        <IoNotificationsOutline  className="iconFooter"/>
                        <div>
                            <span className="spanFooter">Mensagens</span>
                        </div>
                    </div>
                    <div className="icones">
                        <LuUser  className="iconFooter"/>
                        <div>
                            <span className="spanFooter">Perfil</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;