import React from "react";
import { Generalreport } from "./Modal";
import { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";




export default function Verticalmenu() {
    //Hooks para abrir los modal
    const [isModalOpenG, setIsModalOpenG] = useState(false);
    const [report, setReport] = useState(0);
    const [companies, setCompanies] = useState("")


    const apiUrl = 'http://172.20.3.176:8000/companies';
    //Hacer la llamada a la api para tener el listado de las companias
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();
                setCompanies(result);
            } catch (error) {
                setError(error);
                console.log(error);
            }
        };

        fetchData();
    }, []);
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

    const closeModalP = () => {
        setIsModalOpenG(true);
        setReport(3)
    };

    return <>
        <div className="main-container-menu">
            <div className="container-user"> <FaUserCircle size={27} className="container-icon" /> <label> Hi User </label> </div>
            <div className="cotainer-menu">
                <ul className="ul">
                    <li onClick={openModalG}>
                        <a href="#" > Reporte general</a>
                        <IoIosArrowForward className="img-arrow" />
                    </li>

                    <li onClick={openModalI}>
                        <a href="#"> Reporte general por compañia</a>
                        <IoIosArrowForward className="img-arrow" />
                    </li>


                    <li onClick={openModalD}>
                        <a href="#" > Reporte detallado por compañia</a>
                        <IoIosArrowForward className="img-arrow" />
                    </li>

                    <li onClick={closeModalP}>
                        <a href="#"> Reporte individual por persona</a>
                        <IoIosArrowForward className="img-arrow" />
                    </li>
                </ul>
            </div>

            <div className="container-menu-logout">
                <LuLogOut size={27} className="container-icon-logout" />
                <label>Salir</label>
            </div>
        </div>

        {isModalOpenG && <Generalreport report={report} companies={companies} onClose={closeModalG} />}
    </>
}