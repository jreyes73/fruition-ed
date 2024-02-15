import React from "react";
import styles from "./KeeperFooter.module.css"

export default function KeeperFooter() {

    const date = new Date();
    const currentYear = date.getFullYear();

    return(
        <div className={styles.keeperFooter}>
            <p className={styles.keeperFooterText} >Copyright {currentYear}</p>
        </div>
    )
}