import React from "react";
import styles from "./OurTeam.module.css";

export default function ProfileImage (props) {
    return (
        <img className={styles.circleImg}
            src={props.memberImage}
            alt="member's photo"
        />
    )
}