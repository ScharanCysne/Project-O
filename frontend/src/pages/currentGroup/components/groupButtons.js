/**
 * File: groupButtons.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for service buttons in current group.
 */

import React from 'react'

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import HomeIcon from '@mui/icons-material/Home';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export default function GroupButtons() {
    return (
        <div>
            <Grid container spacing={4} style={{textAlign: "center", marginBottom: "2em"}}>
                <Grid item xs={6} textAlign="right">
                    <Button
                        style={{backgroundColor: "#355573", marginTop: "2em", height: "4em", wdith: "1.5em"}}
                        href="/"
                        variant="contained"
                    >
                        <HomeIcon/>
                    </Button>
                </Grid>
                <Grid item xs={6} textAlign="left">
                <Button
                        style={{backgroundColor: "#355573", marginTop: "2em", height: "4em", wdith: "1.5em"}}
                        href="/"
                        variant="contained"
                    >
                        <AttachMoneyIcon/>
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
}