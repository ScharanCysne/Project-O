import React from 'react'

import { Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';

import PixIcon from '@mui/icons-material/Pix';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    backgroundColor: "#EDEDED",
    width: "4em",
    margin: "1em",
  }));

export default function Services() {
    return (
        <div>
            <Grid container>
                <Grid item xs={4} style={{textAlign: "right"}}>
                    <Item key={1}>
                        <IconButton title="Pix" placement="bottom">
                            <PixIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Item>
                </Grid>
                <Grid item xs={4} style={{textAlign: "center"}}>
                    <Item key={2}>
                        <IconButton title="Transferir" placement="bottom">
                            <ImportExportIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Item>
                </Grid>
                <Grid item xs={4} style={{textAlign: "left"}}>
                    <Item key={3}>
                        <IconButton title="Conta" placement="bottom">
                            <ManageSearchIcon style={{color: 'black'}} sx={{ fontSize: 40 }} />
                        </IconButton>
                    </Item>
                </Grid>
            </Grid>
        </div>
    );
}