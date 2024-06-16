import React from 'react'
import Button from '@mui/material/Button';

export default function RouterButton(props) {
    return (
        <div>
            <div style={{
                textAlign: 'left',
                height: "25vh",
                position: 'relative'
            }}>
                <Button
                    href={props.href}
                    variant="text"
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        marginLeft: '1em',
                        color: "black",
                }}>
                    <h3>{props.title}</h3>
                </Button>
            </div>
        </div>
    );
}