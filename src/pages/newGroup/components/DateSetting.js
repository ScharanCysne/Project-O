import React from 'react'
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

export default function DateSetting(props) {
    return (
        <div>
            <h4>{props.title}</h4>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DesktopDatePicker
                    label="DD/MM/YYYY"
                    minDate={dayjs('2024-01-01')}
                    onChange={(newValue) => {setValue(newValue)}}
                    renderInput={(params) => <TextField {...params} />}
                    style={{width: "100%"}}
                    format="DD/MM/YYYY"
                />
            </LocalizationProvider>
        </div>
    );
}