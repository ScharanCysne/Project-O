import React from 'react'
import TextField from '@mui/material/TextField';

export default function GroupName() {
    return (
        <div style={{textAlign: 'center', height: "25vh", position: 'relative', backgroundColor: "#F2CDCB"}}>
            <TextField
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: "100%"
                }}
                id="standard-basic"
                label="Nome"
                variant="standard"
            />
        </div>
    );
}