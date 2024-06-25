import React from 'react'

import GroupName from './components/groupName';
import GroupButtons from './components/groupButtons';
import GroupMembers from './components/groupsMembers';

export default function CurrentGroup() {
    return (
        <div>
            <GroupName/>
            <GroupMembers/>
            <GroupButtons/>
        </div>
    );
}