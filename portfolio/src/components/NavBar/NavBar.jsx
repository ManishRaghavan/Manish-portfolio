import React from 'react'
import styles from "./navBar.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard, faBars, faHome, faIdBadge, faLaptopCode, faProjectDiagram, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useHistory,useLocation } from 'react-router-dom'
import Tilt from 'react-parallax-tilt';

export const NavBar = () => {

    const [nav,SetNav] = React.useState(false)
    let location = useLocation()
    const[active,SetActive] = React.useState("")
    React.useEffect(()=>{
        let path = location.pathname.split("/")[1]
        return SetActive(path)
    },[location])

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
        <Tilt>
            <h1 onClick={()=>handleRoute("/")} className={styles.Name}>
            <img  className={styles.hat} src="w2.png" alt="pic"/>Manish</h1>
        </Tilt>
            <nav className={styles.NavBox}> 
            
        <h3 className={active===""?styles.active:null} onClick={()=>handleRoute("/")}> <FontAwesomeIcon className={styles.l} icon={faHome}/>Home</h3>
        <h3 className={active==="about"?styles.active:null} onClick={()=>handleRoute("/about")}><FontAwesomeIcon className={styles.l} icon={faAddressCard}/>About Me</h3>
        <h3 className={active==="skills"?styles.active:null}onClick={()=>handleRoute("/skills")}><FontAwesomeIcon className={styles.l} icon={faLaptopCode}/>Skills</h3>
        <h3 className={active==="works"?styles.active:null}onClick={()=>handleRoute("/works")}><FontAwesomeIcon className={styles.l} icon={faProjectDiagram}/>Works</h3>
        <h3 className={active==="contacts"?styles.active:null}onClick={()=>handleRoute("/contacts")}><FontAwesomeIcon className={styles.l} icon={faIdBadge}/>Contact Me</h3>
            
            {nav===true?
            <FontAwesomeIcon onClick={handleNav} icon={faTimes} className={styles.menuIcon} />
            :<FontAwesomeIcon onClick={handleNav} icon={faBars} className={styles.menuIcon} />
            }
            </nav>
         
        
        </div>

        <nav className={nav===false?styles.SideBox:`${styles.SideBox} ${styles.SideBoxActive}`}>
        <h3>{""}</h3>
        <h3 onClick={()=>handleRoute("/",true)}><FontAwesomeIcon className={styles.l} icon={faHome}/>Home</h3>
        <h3 onClick={()=>handleRoute("/about",true)}><FontAwesomeIcon className={styles.l} icon={faAddressCard}/>About Me</h3>
        <h3 onClick={()=>handleRoute("/skills",true)}><FontAwesomeIcon className={styles.l} icon={faLaptopCode}/>Skills</h3>
        <h3 onClick={()=>handleRoute("/works",true)}><FontAwesomeIcon className={styles.l} icon={faProjectDiagram}/>Works</h3>
        <h3 onClick={()=>handleRoute("/contacts",true)}><FontAwesomeIcon className={styles.l} icon={faIdBadge}/>Contact Me</h3>
        <h3>@ Manish</h3>
        </nav>
        </>
    )
}
