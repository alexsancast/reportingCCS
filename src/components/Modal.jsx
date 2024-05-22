import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Buttons from "./Button"
import DatePickerValue from './Calendar';
import UnstyledSelectControlled from './Select';
import "../sass/modal.scss"


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 750,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function Generalreport({ onClose, report }) {
    const [startDate, setStartDate] = React.useState(null);
    const [endDate, setEndDate] = React.useState(null);
    const [company, setCompany] = React.useState(null);



    return (

        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='main-container-modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h1">
                        {report === 0 && (<h2>Reporte general</h2>)}
                        {report === 1 && (<h2>Reporte individual por compañia</h2>)}
                        {report === 2 && (<h2>Reporte general por compañia</h2>)}
                    </Typography>
                    <div className='container-picker-date'>
                        <DatePickerValue
                            startDate={startDate}
                            setStartDate={setStartDate}
                            endDate={endDate}
                            setEndDate={setEndDate} />
                    </div>
                    {report !== 0 && (
                        <div className='container-picker-date-select'>
                            <UnstyledSelectControlled company={company} setCompany={setCompany} />
                        </div>
                    )}



                    <Buttons report={report}
                        onClose={onClose} startDate={startDate} endDate={endDate} company={company} />
                </div>
            </Box>



        </Modal >

    );
}


