import React from "react";

export default function OurTeamDetails (props) {
    return (
        <div>
            <p>{props.position}</p>
            <p>{props.phone}</p>
            <p>{props.email}</p>
        </div>
    )
}