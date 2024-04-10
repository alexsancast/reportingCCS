import React from "react";
import { Generalreport } from "./Modal";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";




export default function Verticalmenu() {
    //Hooks para abrir los modal
    const [isModalOpenG, setIsModalOpenG] = useState(false);
    const [report, setReport] = useState(0);


    //Funciones para cambiar los estados de los hooks
    const openModalG = () => {
        setIsModalOpenG(true);
        setReport(0)
    };
    const openModalI = () => {
        setIsModalOpenG(true);
        setReport(1)

    };
    const openModalD = () => {
        setIsModalOpenG(true);
        setReport(2)
    };
    const closeModalG = () => {
        setIsModalOpenG(false);
    };

    return <>
        <div className="main-container-menu">
            <div className="container-user"> <FaUserCircle size={27} className="container-icon" /> <label> Hi User </label> </div>
            <div className="cotainer-menu">
                <ul className="ul">
                    <li id="1" onClick={openModalG}>
                        <a href="#" > Reporte general</a>
                    </li>

                    <li id="2" onClick={openModalI}>
                        <a href="#"> Reporte detallado de ventas</a>
                    </li>


                    <li id="3" onClick={openModalD}>
                        <a href="#" > Reporte por compania</a>
                    </li>
                </ul>
            </div>

            <div className="container-menu-logout">
                <LuLogOut size={27} className="container-icon-logout" />
                <label>Salir</label>
            </div>
        </div>

        {isModalOpenG && <Generalreport report={report} onClose={closeModalG} />}
    </>
}