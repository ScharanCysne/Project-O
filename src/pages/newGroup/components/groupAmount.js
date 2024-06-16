import React from 'react'

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

export default function GroupAmount() {
    return (
        <div style={{textAlign: 'center', marginTop: "2em", marginBottom: "2em"}}>
            <FormControl style={{width: "50%"}} sx={{ m: 1 }} variant="standard">
                <InputLabel htmlFor="standard-adornment-amount">Valor por parcela</InputLabel>
                <Input
                    id="standard-adornment-amount"
                    startAdornment={<InputAdornment position="start">R$</InputAdornment>}
                />
            </FormControl>
        </div>
    );
}