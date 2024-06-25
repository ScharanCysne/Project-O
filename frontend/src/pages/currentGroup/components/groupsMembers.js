import React, { useState } from 'react'

import Member from './member';

export default function GroupMembers() {
    const [rows, setRows] = useState([
        {name: "Beatriz", avatar_path: "/static/1.jpeg", status: "Faltam 12 dias", value: 40, color: "secondary", amount: "R$ 1.000,00"},
        {name: "Carol", avatar_path: "/static/2.jpeg", status: "Próxima", value: 100},
        {name: "Mel", avatar_path: "/static/3.jpeg", status: "A caminho", value: 100},
        {name: "Janine", avatar_path: "/static/4.jpeg", status: "A caminho", value: 100},
        {name: "Laura", avatar_path: "/static/5.jpeg", status: "A caminho", value: 100},
    ]);

    return (
        <div>
            {
                rows.map((row) => (
                    <Member
                        name={row.name}
                        avatar_path={row.avatar_path}
                        status={row.status}
                        color={row.color}
                        value={row.value}
                        amount={row.amount}
                    />
                ))
            }
        </div>
    );
}