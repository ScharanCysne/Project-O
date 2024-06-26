/**
 * File: currentGroup.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for structuring current group layout.
 */

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