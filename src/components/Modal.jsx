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
    console.log(report)

    return (

        <Modal
            open={true}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div className='main-container-modal'>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        {report === 0 && (<h2>Reporte General</h2>)}
                        {report === 1 && (<h2>Reporte individual por ventas</h2>)}
                        {report === 2 && (<h2>Reporte por compania</h2>)}
                    </Typography>
                    {report === 0 ? <div className='container-picker'><DatePickerValue /> </div> :
                        report === 2 ? <>
                            <div className='container-picker-date'>
                                <DatePickerValue />
                            </div>
                            <div className='container-picker-date-select'>
                                <UnstyledSelectControlled />
                            </div>
                        </> :
                            <>
                                <div className='container-picker-date'>
                                    <DatePickerValue />
                                </div>
                                <div className='container-picker-date-select'>
                                    <UnstyledSelectControlled />
                                </div>

                            </>}
                    <Buttons />
                </div>
            </Box>



        </Modal >

    );
}


