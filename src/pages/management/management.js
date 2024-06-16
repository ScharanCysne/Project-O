import React from 'react'
import Divider from '@mui/material/Divider';

import Account from './components/account';
import RouterButton from './components/routerButton';
import Tooltips from './components/tooltip';

export default function Management() {
    return (
        <div>
            <Account/>
            <Divider style={{borderWidth: '0.5px', borderColor: "lightgray"}}/>
            <RouterButton href="/new" title="Crie um novo grupo"/>
            <Divider style={{borderWidth: '0.5px', borderColor: "lightgray"}}/>
            <RouterButton href="/join" title="Participe de um grupo existente"/>
            <Divider style={{borderWidth: '0.5px', borderColor: "lightgray"}}/>
            <RouterButton href="/mygroups" title="Meus grupos"/>
            <Tooltips/>
        </div>
    );
}