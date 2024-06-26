/**
 * File: newGroup.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for creation of new groups.
 */

import React, { useState } from 'react'

import { Button } from '@mui/material';

import GroupName from './components/groupName';
import GroupAmount from './components/groupAmount';
import InviteMembers from './components/inviteMembers';
import Dates from './components/Dates';
import ConfirmationModal from './components/ConfirmationModal';

export default function NewGroup() {
    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([
        {name: "Beatriz", avatar_path: "/static/1.jpeg"},
        {name: "Carol", avatar_path: "/static/2.jpeg"},
        {name: "Mel", avatar_path: "/static/3.jpeg"},
        {name: "Janine", avatar_path: "/static/4.jpeg"},
        {name: "Laura", avatar_path: "/static/5.jpeg"},
    ]);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <GroupName/>
            <GroupAmount/>
            <div style={{margin: "1em"}}>
                <InviteMembers/>
            </div>
            <Dates/>
            <div style={{textAlign: "center"}}>
                <Button
                    style={{backgroundColor: "#355573", marginBottom: "2em", fontSize: "0.7em"}}
                    variant="contained"
                    onClick={handleOpen}
                >
                    Criar
                </Button>
            </div>
            <ConfirmationModal open={open} handleClose={handleClose} rows={rows} />
        </div>
    );
}