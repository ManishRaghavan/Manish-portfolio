import React from 'react'
import styles from "./skills.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGit, faHtml5, faJs, faNodeJs, faReact, faUikit } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faServer, faTable,faWaveSquare } from '@fortawesome/free-solid-svg-icons'
import {motion} from "framer-motion"
import Tilt from 'react-parallax-tilt';


export const Skills = () => {

    const data =[
        {Name:"Git",logo:faGit,percentage:60},
        {Name:"HTML5",logo:faHtml5,percentage:85},
        {Name:"CSS3",logo:faCss3,percentage:65},
        {Name:"JAVASCRIPT",logo:faJs,percentage:85},
        {Name:"REACT.JS",logo:faReact,percentage:85},
        {Name:"NODE.JS / EXPRESS",logo:faNodeJs,percentage:78},
        {Name:"MONGODB",logo:faDatabase,percentage:60},
        {Name:"MYSQL",logo:faDatabase,percentage:50},
    ]

    const data2 =[
        {Name:"FRONTEND",logo:faUikit,percentage:85},
        {Name:"DATA STRUCTURES",logo:faTable,percentage:75},
        {Name:"ALGORITHMS",logo:faWaveSquare,percentage:65},
        {Name:"BACKEND",logo:faServer,percentage:65},
    ]

    return (
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <div className={styles.techBox}>
                <h1 className={styles.heading}>Tech Skills</h1>
                {data.map(item=>(
                    <Tilt>
                    <div className={styles.skillBox}>
                        <FontAwesomeIcon icon={item.logo} className={styles.logo} />
                        <div className={styles.insideBox}>

                        <p className={styles.name}>{item.Name} <span className={styles.span}>{`${item.percentage}%`}</span></p>
                        <div className={styles.per1}>
                        <div className={styles.per2} style={{width:`${item.percentage}%`}}>

                        </div>  
                        </div>
                        </div>
                    </div>
                </Tilt>
                ))}
            </div>

            <div className={styles.techBox}>
                <img src="buddy-33.png" alt="pic" className={styles.imgB}/>
                <h1 className={styles.heading}>Proficiencies</h1>
                {data2.map(item=>(
                    <Tilt>
                    <div className={styles.skillBox}>
                        <FontAwesomeIcon icon={item.logo} className={styles.logo} />
                        <div className={styles.insideBox}>

                        <p className={styles.name}>{item.Name} <span className={styles.span}>{`${item.percentage}%`}</span></p>
                        <div className={styles.per1}>
                        <div className={styles.per2} style={{width:`${item.percentage}%`}}>

                        </div>  
                        </div>
                        </div>
                    </div>
                    </Tilt>
                ))} 
            </div>
        </motion.div>
    )
}
