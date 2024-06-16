import React from 'react';

import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Stack from '@mui/material/Stack';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

export default function Tooltips() {
    return (
        <div>
            <Stack direction="row" style={{position: 'absolute', top: "1em", right: "1em"}}>
                <Tooltip>
                    <IconButton title="Mensagens" placement="bottom">
                        <ChatBubbleOutlineIcon style={{color: 'black'}}/>
                    </IconButton>
                    <IconButton title="Dúvidas" placement="bottom">
                        <HelpOutlineIcon style={{color: 'black'}}/>
                    </IconButton>
                    <IconButton title="Conta" placement="bottom">
                        <AccountCircleIcon style={{color: 'black'}}/>
                    </IconButton>
                </Tooltip>
            </Stack>
        </div>
    );
}