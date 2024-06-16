import React from 'react'

export default function GroupName() {
    return (
        <div style={{textAlign: 'center', height: "25vh", position: 'relative', backgroundColor: "#7B6DE8"}}>
            <p
                style={{
                    position: 'absolute',
                    top: "7em",
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
                Nome
            </p>
        </div>
    );
}