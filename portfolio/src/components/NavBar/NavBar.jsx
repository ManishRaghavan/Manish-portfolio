import React from 'react'
import styles from "./navBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'


export const NavBar = () => {

    const [nav,SetNav] = React.useState(false)

    const handleNav = ()=>{
        SetNav(!nav)
    }

    const history = useHistory()
    
    const handleRoute = (link,mobile)=>{
        history.push(link)
        if(mobile){
            SetNav(!nav)
        }
    }

    return (
        <>
        <div className={styles.MainBox}>
            <h1 className={styles.Name}>Manish</h1>
            <nav className={styles.NavBox}>
        <h3 onClick={()=>handleRoute("/")}>Home</h3>
        <h3 onClick={()=>handleRoute("/about")}>About Me</h3>
        <h3 onClick={()=>handleRoute("/skills")}>Skills</h3>
        <h3 onClick={()=>handleRoute("/works")}>Works</h3>
        <h3 onClick={()=>handleRoute("/contacts")}>Contact Me</h3>
            {/* <MenuRoundedIcon className={styles.menuIcon} style={{ fontSize: 40}}/> */}
            <FontAwesomeIcon onClick={handleNav} icon={faBars} className={styles.menuIcon} />
            </nav>
         
        
        </div>

        <nav className={nav===false?styles.SideBox:`${styles.SideBox} ${styles.SideBoxActive}`}>
        <h3>{""}</h3>
        <h3 onClick={()=>handleRoute("/",true)}>Home</h3>
        <h3 onClick={()=>handleRoute("/about",true)}>About Me</h3>
        <h3 onClick={()=>handleRoute("/skills",true)}>Skills</h3>
        <h3 onClick={()=>handleRoute("/works",true)}>Works</h3>
        <h3 onClick={()=>handleRoute("/contacts",true)}>Contact Me</h3>
        <h3>@ Manish</h3>
        </nav>
        </>
    )
}
