import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from 'react-router-dom';

export default function Root(){
    return (
        <>
            <Header/>
            <main style={{marginLeft: "3rem", marginTop: "3rem"}}>
                <Outlet/>
            </main>
            <Footer />
        </>
    )
}