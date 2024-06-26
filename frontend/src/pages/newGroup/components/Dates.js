/**
 * File: Dates.js
 * Author: Nicholas Scharan Cysne
 * Date: 06/20/2024
 *
 * Description: Component for list of date picker objects.
 */

import React from 'react'

import { Divider } from '@mui/material';
import DateSetting from './DateSetting';

export default function Dates() {
    return (
        <div>
            <Divider/>
            <div style={{margin: "1em"}}>
                <DateSetting title="Definir data de pagamento"/>
                {/* <DateSetting title="Recebimento"/> */}
            </div>
        </div>
    );
}