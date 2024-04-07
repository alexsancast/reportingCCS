import React from "react";
import BasicModal from "./Modal";
import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";



export default function Verticalmenu() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return <>
        <div className="main-container-menu">
            <div className="container-user"> <FaUserCircle size={27} className="container-icon" /> <label> Hi User !</label> </div>
            <div className="cotainer-menu">
                <ul className="ul">
                    <li>
                        <a href="#" onClick={openModal}> Reporte general</a>
                    </li>

                    <li>
                        <a href="#"> Reporte detallado de ventas</a>
                    </li>


                    <li>
                        <a href="#" > Reporte por compania</a>
                    </li>
                </ul>
            </div>

            <div className="container-menu-logout">
                <LuLogOut size={27} className="container-icon-logout" />
                <label>Salir</label>
            </div>
        </div>
        {isModalOpen && <BasicModal onClose={closeModal} />}
    </>
}