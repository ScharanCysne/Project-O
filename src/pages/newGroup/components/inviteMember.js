import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function InviteMembers() {
    const [rows, setRows] = useState(["Ana", "Beatriz"]);

    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={{textAlign: "center"}}>
                    <h4>Participantes</h4>
                </Grid>
                <Grid item xs={6} style={{textAlign: "center"}}>
                    <h4>Toggle</h4>
                </Grid>
            </Grid>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
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
        </div>
    );
}