import React, { useState } from 'react'

import Member from './member';

export default function GroupName() {
    const [rows, setRows] = useState([
        {name: "Beatriz", avatar_path: "/static/1.jpeg", status: "Próxima", value: 40, color: "secondary"},
        {name: "Carol", avatar_path: "/static/2.jpeg", status: "A Receber", value: 100},
        {name: "Mel", avatar_path: "/static/3.jpeg", status: "A Receber", value: 100},
        {name: "Janine", avatar_path: "/static/4.jpeg", status: "A Receber", value: 100},
        {name: "Laura", avatar_path: "/static/5.jpeg", status: "A Receber", value: 100},
    ]);

    return (
        <div style={{textAlign: 'center', height: "25vh", position: 'relative', backgroundColor: "#7B6DE8"}}>
            <h2
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    textAlign: "center"
                }}
            >
                Azamigas
            </h2>
            {
                rows.map((row) => (

                    <Member
                        name={row.name}
                        avatar_path={row.avatar_path}
                        status={row.status}
                        color={row.color}
                        value={row.value}
                    />
                ))
            }
        </div>
    );
}