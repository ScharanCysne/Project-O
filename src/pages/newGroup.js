import React from 'react'
import dayjs, { Dayjs } from 'dayjs';

import { Button } from '@mui/material';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const rows = [
    "Ana",
    "Beatrix",
    "Carol",
    "Leozinho"
];

export default function NewGroup() {
    return (
        <div>
            <div style={{textAlign: 'center', height: "25vh", position: 'relative', backgroundColor: "#F2CDCB"}}>
                <TextField style={{position: 'absolute', bottom: 0, left: "50%"}} id="standard-basic" label="Nome" variant="standard" />
            </div>
            <Divider style={{borderWidth: '0.5px', borderColor: "black"}}/>
            <div style={{textAlign: 'center'}}>
                <TextField style={{margin: "1em"}} id="standard-basic" label="Valor" variant="standard" />
            </div>
            <Grid container>
                <Grid item xs={6} style={{textAlign: "center"}}>
                    <h4>Participantes</h4>
                </Grid>
                <Grid item xs={6} style={{textAlign: "center"}}>
                    <h4>Toggle</h4>
                </Grid>
            </Grid>
            <TableContainer>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Nome</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <div style={{marginLeft: "1em"}}>
                <div>
                    <h4>Data de Pagamento</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="DD/MM/YYYY"
                            minDate={dayjs('2024-01-01')}
                            onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                    </LocalizationProvider>
                </div>
                <div>
                    <h4>Data de Recebimento</h4>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DesktopDatePicker
                            label="DD/MM/YYYY"
                            minDate={dayjs('2024-01-01')}
                            onChange={(newValue) => {
                                setValue(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} />}
                                />
                    </LocalizationProvider>
                </div>
            </div>
            <div style={{textAlign: "center", margin: "1em"}}>
                <Button variant="contained">
                    Criar
                </Button>
            </div>
        </div>
    );
}