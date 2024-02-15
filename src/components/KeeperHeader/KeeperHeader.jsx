import React from "react";
import styles from "./KeeperHeader.module.css"

export default function KeeperHeader() {
    return(
        <div className={styles.navbar}>
            <h1 className={styles.navbarText}>Keeper</h1>
        </div>
    )
}