import React from 'react'

import { Button } from '@mui/material';

import GroupName from './components/groupName';
import GroupAmount from './components/groupAmount';
import InviteMembers from './components/inviteMembers';
import DateSetting from './components/DateSetting';

export default function NewGroup() {
    return (
        <div>
            <GroupName/>
            <GroupAmount/>
            <div style={{margin: "1em"}}>
                <InviteMembers/>
                <DateSetting title="Data de Pagamento"/>
                <DateSetting title="Data de Recebimento"/>
            </div>
            <div style={{textAlign: "center"}}>
                <Button href="current" variant="contained">Criar</Button>
            </div>
        </div>
    );
}