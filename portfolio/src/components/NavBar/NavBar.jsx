import React from 'react'
import styles from "./navBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


export const NavBar = () => {

    const [nav,SetNav] = React.useState(false)

    const handleNav = ()=>{
        SetNav(!nav)
    }

    return (
        <>
        <div className={styles.MainBox}>
            <h1 className={styles.Name}>Manish</h1>
            <nav className={styles.NavBox}>
                <h3>Home</h3>
                <h3>About Me</h3>
                <h3>Skills</h3>
                <h3>Works</h3>
                <h3>Contact Me</h3>
            {/* <MenuRoundedIcon className={styles.menuIcon} style={{ fontSize: 40}}/> */}
            <FontAwesomeIcon onClick={handleNav} icon={faBars} className={styles.menuIcon} />
            </nav>
         
        
        </div>

        <nav className={nav===false?styles.SideBox:`${styles.SideBox} ${styles.SideBoxActive}`}>
        <h3>{""}</h3>
        <h3>Home</h3>
        <h3>About Me</h3>
        <h3>Skills</h3>
        <h3>Works</h3>
        <h3>Contact Me</h3>
        <h3>@ Manish</h3>
        </nav>
        </>
    )
}
