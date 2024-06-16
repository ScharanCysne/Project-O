import React from 'react'
import TextField from '@mui/material/TextField';

export default function GroupAmount() {
    return (
        <div style={{textAlign: 'center', marginTop: "2em", marginBottom: "2em"}}>
            <TextField style={{margin: "1em"}} id="standard-basic" label="Valor" variant="standard" />
        </div>
    );
}