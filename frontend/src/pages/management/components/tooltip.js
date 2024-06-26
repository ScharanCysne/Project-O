/**
 * File: tooltip.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for tooltips objects on top right.
 */

import React from 'react';

import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Tooltips() {
    return (
        <div>
            <Stack direction="row" style={{position: 'absolute', top: "1em", right: "1em"}}>
                <IconButton title="Mensagens" placement="bottom">
                    <ChatBubbleOutlineIcon style={{color: 'white'}}/>
                </IconButton>
                <IconButton title="Dúvidas" placement="bottom">
                    <HelpOutlineIcon style={{color: 'white'}}/>
                </IconButton>
                <IconButton title="Conta" placement="bottom">
                    <AccountCircleIcon style={{color: 'white'}}/>
                </IconButton>
            </Stack>
        </div>
    );
}