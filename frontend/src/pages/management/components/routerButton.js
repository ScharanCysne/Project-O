/**
 * File: routerButton.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for single router button for App's functionalities.
 */

import React from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function RouterButton(props) {
    return (
        <div>
            <div style={{textAlign: 'left', height: "20vh", position: 'relative'}}>
                <Button
                    href={props.href}
                    variant="text"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: '1em',
                        color: "black",
                }}>
                    <Stack direction="row" alignItems="center">
                        <p style={{fontWeight: "bold"}}>{props.title}</p>
                        <KeyboardArrowRightIcon style={{margin: "0.5em"}}/>
                    </Stack>
                </Button>
            </div>
        </div>
    );
}