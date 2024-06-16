import React, { useState } from 'react'

import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function InviteMembers() {
    const [rows, setRows] = useState([
        {name: "Ana", avatar_path: "/static/1.jpeg"},
        {name: "Beatriz", avatar_path: "/static/2.jpeg"},
        {name: "Carol", avatar_path: "/static/3.jpeg"}
    ]);

    return (
        <div>
            <Grid container>
                <Grid item xs={6} style={{textAlign: "left"}}>
                    <p>Participantes</p>
                </Grid>
                <Grid item xs={6} style={{textAlign: "right"}}>
                    <FormControl component="fieldset">
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="start"
                                control={<Switch color="primary" />}
                                label="Aleatório"
                                labelPlacement="start"
                            />
                        </FormGroup>
                    </FormControl>
                </Grid>
            </Grid>
            <TableContainer>
                <Table size="small" aria-label="a dense table">
                    <TableHead>
                    <TableRow>
                        <TableCell style={{wdith: "10%"}}></TableCell>
                        <TableCell style={{wdith: "90%"}}></TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            <Avatar
                                alt={row.name}
                                src={row.avatar_path}
                                sx={{ width: 24, height: 24 }}
                            />
                        </TableCell>
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
}