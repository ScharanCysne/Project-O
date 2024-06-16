import React from 'react'
import TextField from '@mui/material/TextField';

export default function GroupAmount() {
    return (
        <div style={{textAlign: 'center'}}>
            <TextField style={{margin: "1em"}} id="standard-basic" label="Valor" variant="standard" />
        </div>
    );
}