import * as React from 'react';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import { Stack } from '@mui/material';

import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'left',
  color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
  alignItems: "middle"
}));

const lightTheme = createTheme({ palette: { mode: 'light' } });

export default function Member(props) {
  return (
    <ThemeProvider theme={lightTheme}>
        <Item key={1} elevation={1}>
            <Stack direction="row" style={{margin: "10px", width: "100%", alignItems: "center"}}>
                <Avatar
                    alt={props.name}
                    src={props.avatar_path}
                    sx={{ width: 36, height: 36 }}
                    style={{marginRight: "1em"}}
                />
                <p>{props.name}</p>
            </Stack>
        </Item>
    </ThemeProvider>
  );
}