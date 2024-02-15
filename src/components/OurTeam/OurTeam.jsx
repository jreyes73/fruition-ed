import React from "react";
import styles from "./OurTeam.module.css";
import ProfileImage from "./ProfileImage";
import OurTeamDetails from "./OurTeamDetails";

export default function OurTeam (props) {
    return (
        <div className={styles.flexContainer}>
            <div className={styles.container}>
                <div className={styles.containerTop}>
                    <h1 className={styles.memberName}>{props.name}</h1>
                </div>
                <ProfileImage memberImage={props.memberImage} />
                <div className={styles.memberInfo}>
                    <OurTeamDetails
                        position={props.position}
                        phone={props.phone}
                        email={props.email}
                    />
                </div>
            </div>
        </div>
    )
}
