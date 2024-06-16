import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Switch from '@mui/material/Switch';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import Member from './Member';

export default function InviteMembers() {
    const [rows, setRows] = useState([
        {name: "Beatriz", avatar_path: "/static/1.jpeg"},
        {name: "Carol", avatar_path: "/static/2.jpeg"},
        {name: "Mel", avatar_path: "/static/3.jpeg"},
        {name: "Janine", avatar_path: "/static/4.jpeg"},
        {name: "Laura", avatar_path: "/static/5.jpeg"},
        {name: "+ invite", avatar_path: "/static/5.jpeg"}
    ]);

    return (
        <div>
            <Grid container>
                <Grid item xs={8} style={{textAlign: "left"}}>
                    <p style={{fontSize: "0.7em"}}>Participantes</p>
                </Grid>
                <Grid item xs={4} style={{textAlign: "right"}}>
                    <Stack direction="row" style={{textAlign: "right"}}>
                        <p style={{fontSize: "0.7em"}}>Aleatório</p>
                        <FormControl component="fieldset">
                            <FormGroup aria-label="position" row>
                                <FormControlLabel
                                    value="start"
                                    control={<Switch color="primary" />}
                                    labelPlacement="start"
                                />
                            </FormGroup>
                        </FormControl>
                    </Stack>
                </Grid>
            </Grid>
                {rows.map((row) => (
                    <Member name={row.name} avatar_path={row.avatar_path}/>
                ))}
        </div>
    );
}