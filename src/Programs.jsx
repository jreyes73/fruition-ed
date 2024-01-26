import React from "react";
import { Outlet } from "react-router-dom";

export default function Programs () {
    return (
        <>
            <h1>This will display the different programs of Fruition Ed.</h1>
            <h2>Such as the Sprout Program</h2>
            <h2>and the Spring Program</h2>
            <Outlet/>
        </>
    )
}