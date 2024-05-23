import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Input({ setCed }) {

    const handleChange = (event) => {
        setCed(event.target.value);
    }
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField onChange={handleChange} id="outlined-basic" label="Cedula" variant="outlined" />
        </Box>
    );
}