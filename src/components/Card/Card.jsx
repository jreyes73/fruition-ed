import React from "react";
import styles from "./Card.module.css"

export default function Card(props) {
    return (
        <div className={styles.container}>
            <img src={props.coverImage} className={styles.containerImg} alt="storybook cover image" />
            <h1>{props.title}</h1>
            <p>{props.bookNum}</p>
            <p className={styles.description}>{props.description}</p>
        </div>
    )
}