import React from "react";
import styles from "./KeeperNote.module.css"

export default function KeeperNote() {
    return(
        <div className={styles.container}>
            <h2>Write your note here</h2>
            <input type="text" placeholder="write your note" />
        </div>
    )
}