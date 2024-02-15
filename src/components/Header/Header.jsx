import React from "react";
import {NavLink} from "react-router-dom";
import styles from "./Header.module.css"


function Header() {
    return (
        <div className={styles.navBackground}>
            <div className={styles.navIcon}></div>
            <NavLink className={({isActive}) => isActive ? styles.linksActive : styles.links} to="/">Home</NavLink>
            <NavLink className={({isActive}) => isActive ? styles.linksActive : styles.links} to="/about">About</NavLink>
            <NavLink className={({isActive}) => isActive ? styles.linksActive : styles.links} to="/programs">Programs</NavLink>
            <NavLink className={({isActive}) => isActive ? styles.linksActive : styles.links} to="contact">Contact</NavLink>
        </div>
    )
}

export default Header;