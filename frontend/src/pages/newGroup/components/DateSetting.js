/**
 * File: DateSetting.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for setting date picker.
 */

import React, { useState } from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DateSetting(props) {
    const [value, setValue] = useState(dayjs('2024-01-01'))

    return (
        <div style={{marginBottom: "2em", marginTop: "2em"}}>
            <Stack direction="row" >
                <p style={{width: "50%", fontSize: "0.7em", paddingLeft: "1em"}}>{props.title}</p>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DesktopDatePicker
                        label=" "
                        minDate={dayjs('2024-01-01')}
                        onChange={(newValue) => {setValue(newValue)}}
                        renderInput={(params) => <TextField size="small" {...params} />}
                        slotProps={{ textField: { size: 'small' } }}
                        format="DD/MM/YYYY"
                    />
                </LocalizationProvider>
            </Stack>
        </div>
    );
}