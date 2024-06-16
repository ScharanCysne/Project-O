import React from 'react'

export default function Account() {
    return (
        <div style={{
            textAlign: 'left',
            height: "25vh",
            position: 'relative',
            backgroundColor: "#7B6DE8"
        }}>
            <h1 style={{position: 'absolute', top: 0, marginLeft: '0.8em', fontSize: "1.5em", color: "white"}}>
                Olá, Laura!
            </h1>
            <h4 style={{position: 'absolute', bottom: '2em', marginLeft: '1.2em', color: "white"}}>
                Conta
            </h4>
            <h3 style={{position: 'absolute', bottom: 0, marginLeft: '1em', color: "white"}}>
                R$ 200,00
            </h3>
        </div>
    );
}