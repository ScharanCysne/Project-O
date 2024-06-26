/**
 * File: services.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for widgets with App's secondary services.
 */

import React from 'react'

import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import PixIcon from '@mui/icons-material/Pix';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

export default function Services() {
    return (
        <div>
            <Grid container spacing={8}>
                <Grid item xs={2}>
                </Grid>
                <Grid item xs={2}>
                    <Paper elevation={1} style={{backgroundColor: "#EDEDED", width: "3.5em", margin: "1em"}} key={1}>
                        <IconButton title="Pix" placement="bottom">
                            <PixIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Paper>
                    <p style={{fontSize: "0.7em", marginLeft: "3.2em", marginRight: "3.2em", fontWeight: "bold"}}>Pix</p>
                    </Grid>
                <Grid item xs={2}>
                    <Paper style={{backgroundColor: "#EDEDED", width: "3.5em", margin: "1em"}} key={2}>
                        <IconButton title="Transferir" placement="bottom">
                            <ImportExportIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Paper>
                    <p style={{fontSize: "0.7em", marginLeft: "1.7em", marginRight: "1.7em", fontWeight: "bold"}}>Transferir</p>
                </Grid>
                <Grid item xs={2}>
                    <Paper style={{backgroundColor: "#EDEDED", width: "3.5em", margin: "1em"}} key={3}>
                        <IconButton title="Conta" placement="bottom">
                            <ManageSearchIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Paper>
                    <p style={{fontSize: "0.7em", marginLeft: "1.8em", marginRight: "1.8em", fontWeight: "bold"}}>Histórico</p>
                </Grid>
                <Grid item xs={2}>
                </Grid>
            </Grid>
        </div>
    );
}