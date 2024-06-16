import React from 'react'
import dayjs from 'dayjs';

import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import GroupName from './components/groupName';
import GroupAmount from './components/groupAmount';
import InviteMembers from './components/inviteMember';
import DatePicker from './components/datePicker';

export default function NewGroup() {
    return (
        <div>
            <GroupName/>
            <GroupAmount/>
            <InviteMembers/>
            <div style={{marginLeft: "1em"}}>
                <DatePicker title="Data de Pagamento"/>
                <DatePicker title="Data de Recebimento"/>
            </div>
            <div style={{textAlign: "center", margin: "1em"}}>
                <Button href="current" variant="contained">
                    Criar
                </Button>
            </div>
        </div>
    );
}