import React from "react";
import styles from "./Practice.module.css";
import HeaderPractice from "../HeaderPractice/HeaderPractice";
import List from "../List/List";
import KeeperHeader from "../KeeperHeader/KeeperHeader";
import KeeperNote from "../KeeperNote/KeeperNote";
import KeeperFooter from "../KeeperFooter/KeeperFooter";
import Card from "../Card/Card";
import OurTeam from "../OurTeam/OurTeam";
import companyMembers from "./companyMembers";

export default function Practice () {
    
    const fCompanyName = "Fruition";
    const lCompanyName = "Ed";
    const creator = "Julian";

    const pictureURL = "https://picsum.photos/200";

    const customStyle = {
        color: "red",
        fontSize: "2.5rem",
        textDecoration: "underline"
    }

    customStyle.color = "lightblue"

    const date = new Date();
    const currentHour = 18;
    let greeting = "";

    const customTimeColor = {
        color: "pink"
    }

    if (currentHour < 12) {
        greeting = "Good morning";
        customTimeColor.color = "red";
    } else if (currentHour > 17){
        greeting = "Good evening";
        customTimeColor.color = "navy";
    } else {
        greeting = "Good afternoon";
        customTimeColor.color = "green";
    }

    console.log(companyMembers);


    return (
        <>
        <div className={styles.background}>
            <p>JSX practice</p>
            <h1>
                My Storybooks
            </h1>
            <ul>
                <li>If You're Happy</li>
                <li>The ABCs</li>
                <li>The Farmer In the Dell</li>
            </ul>
        </div>
        <div className={styles.background}>
            <p>Injecting Javascript into JSX</p>
            <p>Welcome to the {fCompanyName} {lCompanyName} Home Page!</p>
            <p>Your User ID is 000{Math.floor(Math.random() * 10) + 1}</p>
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle}>Injecting Javascript into JSX and adding dynamic year</h1>
            <p>{fCompanyName} was created by {creator}</p>
            <p>Copyright {new Date().getFullYear()}</p> 
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >Learning CSS</h1>
            <p contentEditable="true" spellCheck="false">{fCompanyName} was created with the idea to engage learners and allowing them to really be a part of their learning.</p>
            <img className={styles.storybookImage} src="https://m.media-amazon.com/images/W/MEDIAX_849526-T3/images/I/81+zHrXaEZL._SY425_.jpg"/>
            <img className={styles.storybookImage} src="https://www.learningstationmusic.com/wp-content/uploads/2021/04/AntsGoMarching_thumb.jpg" alt="higher level-2" />
            <img className={styles.storybookImage} src="https://i.scdn.co/image/ab6761610000e5eb2350eb8c1ec6697246450f0f" alt="final"/> 
            {/* <img src={pictureURL} alt="random" />  */}
            {/* <img src={pictureURL + "?grayscale"} alt="random" /> */}
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >Inline Styling</h1>
            <h2 style={customStyle}>Fruition's first level is Sprout. Sprout is a first exposure language program that utilizes nursery rhymes</h2>
            <h1><span className={styles.heading} style={customTimeColor} >{greeting}!</span> Welcome to the Fruition Homepage</h1>
            <h1>{currentHour}</h1>
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >Components Intro</h1>
            <HeaderPractice />
            <List />
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >Keeper App 1</h1>
            <KeeperHeader />
            <KeeperNote />
            <KeeperFooter />
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >React Props</h1>
            <Card coverImage="happy-cover.jpg" title="If You're Happy" bookNum="Book 1" description="If You're Happy teaches us about all the different feelings" />
            <Card coverImage="the-abcs-cover.jpg" title="The ABCs" bookNum="Book 2" description="The ABCs introduces us to all the letters of the Alphabet" />
            <Card coverImage="old-macdonald-had-a-farm-image-1.jpg" title="The ABCs" bookNum="Book 2" description="The ABCs introduces us to all the letters of the Alphabet" />
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >React Props Practice</h1>
            <h1 className={styles.centerTitle} >Our Team</h1>
            {companyMembers.map((companyMember) => {
                return (
                    <OurTeam
                        key={companyMember.id}
                        name={companyMember.name}
                        position={companyMember.position}
                        phone={companyMember.phone}
                        email={companyMember.email}
                        memberImage={companyMember.profileImage} 
                    />
                )
            }
            )}
            <OurTeam 
                name={companyMembers[0].name} 
                position={companyMembers[0].position} 
                phone={companyMembers[0].phone} 
                email={companyMembers[0].email} 
                memberImage={companyMembers[0].profileImage} 
            />
            <OurTeam 
                name={companyMembers[1].name} 
                position={companyMembers[1].position} 
                phone={companyMembers[1].phone} 
                email={companyMembers[1].email} 
                memberImage={companyMembers[1].profileImage} 
            />
            <OurTeam 
                name={companyMembers[2].name} 
                position={companyMembers[2].position} 
                phone={companyMembers[2].phone} 
                email={companyMembers[2].email} 
                memberImage={companyMembers[2].profileImage} 
            />
            
        </div>
        <div className={styles.background}>
            <h1 className={styles.sectionTitle} >Mapping Data to Components</h1>
            <h1 className={styles.centerTitle} >Our Team part 2</h1>
            {companyMembers.map((companyMember) => {
                return (
                    <OurTeam
                        key={companyMember.id}
                        id={companyMember.id}
                        name={companyMember.name}
                        position={companyMember.position}
                        phone={companyMember.phone}
                        email={companyMember.email}
                        memberImage={companyMember.profileImage}
                    />
                )
            })}
        </div>
        </>
    )
}