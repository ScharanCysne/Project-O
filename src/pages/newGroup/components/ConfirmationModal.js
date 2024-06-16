import React from 'react'

import { Button, Divider } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 1,
    borderRadius: "5px",
    pt: 2,
    px: 4,
    pb: 3,
};

export default function ConfirmationModal(props) {
    return (
        <Modal
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
            >
            <Box sx={{ ...style, width: "70%" }}>
                <h4>Confirmação de Grupo</h4>
                <div>
                    <p>Valores</p>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{textAlign: "left"}}>
                            <p style={{fontSize: "0.7em"}}>Valor por Parcela:</p>
                            <p style={{fontSize: "0.7em"}}>Valor Total:</p>
                        </Grid>
                        <Grid item xs={6} style={{textAlign: "right"}}>
                            <p style={{fontSize: "0.7em"}}>R$ 200,00</p>
                            <p style={{fontSize: "0.7em"}}>R$ 1.000,00</p>
                        </Grid>
                    </Grid>
                </div>
                <div>
                    <p style={{marginTop: "1em"}}>Pessoas</p>
                    <Divider />
                    {
                        props.rows.map((row) => (
                            <Stack direction="row" style={{margin: "2px", width: "100%"}} alignItems="center">
                                <Avatar
                                    alt={props.name}
                                    src={props.avatar_path}
                                    sx={{ width: 24, height: 24 }}
                                    style={{marginTop: "0.5em", marginBottom: "0.5em", marginRight: "0.5em"}}
                                />
                                <p style={{margin: "0.5em", fontSize: "0.7em"}}>{row.name}</p>
                            </Stack>
                        ))
                    }
                </div>
                <div>
                    <p style={{marginTop: "1em"}}>Datas</p>
                    <Divider />
                    <Grid container spacing={2}>
                        <Grid item xs={8} style={{textAlign: "left"}}>
                            <p style={{fontSize: "0.7em"}}>Data de Recebimento:</p>
                            <p style={{fontSize: "0.7em"}}>Data de Pagamento:</p>
                        </Grid>
                        <Grid item xs={4} style={{textAlign: "right"}}>
                            <p style={{fontSize: "0.7em"}}>01/08/2024</p>
                            <p style={{fontSize: "0.7em"}}>01/09/2024</p>
                        </Grid>
                    </Grid>
                </div>
                <div style={{textAlign: "center"}}>
                    <Button
                        style={{backgroundColor: "#355573", marginTop: "2em"}}
                        href="/current"
                        variant="contained"
                        >
                        Confirmar
                    </Button>
                </div>
            </Box>
        </Modal>
    );
}