import React from 'react'

import friends from "./friends.png"

export default function GroupName() {
    return (
        <div>
            <img
                src={friends}
                alt="friends"
                style={{width: "100%"}}
            />
            <p
                style={{
                    position: 'absolute',
                    top: "10em",
                    left: "20%",
                    textAlign: "center",
                    color: "black",
                    width: "40%",
                    backgroundColor: "rgba(255, 255, 255, 0.7)",
                    borderRadius: "10px",
                    padding: "5%",
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    fontWeight: "bold"
                }}
            >
                Azamigas
            </p>
        </div>
    );
}