import React from 'react'

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Member(props) {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={6} style={{textAlign: "left"}}>
                    <Stack direction="row" style={{width: "100%"}} alignItems="center">
                        <Avatar
                            alt={props.name}
                            src={props.avatar_path}
                            sx={{ width: 36, height: 36 }}
                            style={{margin: "1em"}}
                        />
                        <p style={{margin: "1em", fontSize: "1em"}}>{props.name}</p>
                    </Stack>
                </Grid>
                <Grid item xs={6} style={{textAlign: "right", alignItems: "center"}}>
                    <div style={{margin: props.amount ? "1em": "2em", marginRight: "2em"}}>
                        <p style={{fontSize: "0.7em"}}>{props.status}</p>
                        <p style={{fontSize: "1em"}}>{props.amount}</p>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" color={props.color} value={props.value}/>
        </div>
    );
}