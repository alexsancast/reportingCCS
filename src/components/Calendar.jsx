import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerValue({ startDate, setStartDate, endDate, setEndDate }) {

    const handleStartDateChange = (newValue) => {
        setStartDate(newValue);
        console.log('Fecha de inicio:', newValue);
    };

    const handleEndDateChange = (newValue) => {
        setEndDate(newValue);
        console.log('Fecha de fin:', newValue);
    };

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker', 'DatePicker']}>
                <DatePicker
                    label="Desde"
                    value={startDate}
                    onChange={handleStartDateChange} />


                <DatePicker
                    label="Hasta"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
            </DemoContainer>
        </LocalizationProvider>
    );
}