import React from 'react'

import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function Member(props) {
    return (
        <div style={{position: "relative", top: "25vh"}}>
            <Grid container spacing={2}>
                <Grid item xs={8} style={{textAlign: "left"}}>
                    <Stack direction="row" style={{width: "100%"}} alignItems="center">
                        <Avatar
                            alt={props.name}
                            src={props.avatar_path}
                            sx={{ width: 36, height: 36 }}
                            style={{margin: "1em"}}
                        />
                        <p style={{margin: "1em", fontSize: "0.7em"}}>{props.name}</p>
                    </Stack>
                </Grid>
                <Grid item xs={4} style={{textAlign: "right", alignItems: "center"}}>
                    <div>
                        <p style={{margin: "1em", fontSize: "0.7em"}}>{props.status}</p>
                    </div>
                </Grid>
            </Grid>
            <LinearProgress variant="determinate" color={props.color} value={props.value}/>
        </div>
    );
}