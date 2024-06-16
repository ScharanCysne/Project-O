import React from 'react'

import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import GroupName from './components/groupName';
import GroupAmount from './components/groupAmount';
import InviteMembers from './components/inviteMembers';
import Dates from './components/Dates';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: "5px",
    pt: 2,
    px: 4,
    pb: 3,
};


export default function NewGroup() {
    const [open, setOpen] = React.useState(false);
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
                    style={{backgroundColor: "#355573", marginBottom: "2em"}}
                    variant="contained"
                    onClick={handleOpen}
                >
                    Criar
                </Button>
            </div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
                >
                <Box sx={{ ...style, width: "60%" }}>
                    <p>Valores</p>
                    <Divider />
                    <p>Pessoas</p>
                    <Divider />
                    <p>Datas</p>
                    <Divider />
                    <Button
                        style={{backgroundColor: "#355573", marginTop: "2em"}}
                        href="/current"
                        variant="contained"
                    >
                        Confirmar
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}