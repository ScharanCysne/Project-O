import React from 'react'

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

export default function RouterButton(props) {
    return (
        <div>
            <div style={{textAlign: 'left', height: "21vh", position: 'relative'}}>
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
                        <h3>{props.title}</h3>
                        <KeyboardArrowRightIcon style={{margin: "0.5em"}}/>
                    </Stack>
                </Button>
            </div>
        </div>
    );
}