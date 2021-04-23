import React from 'react'
import styles from "./home.module.css"
import Typical from 'react-typical'
import {motion} from "framer-motion"

export const Home = () => {
    return (

      <motion.div className={styles.Box} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>   
            <div className={styles.ContentBox}>
            <h1 className={styles.C_1}>Hi there! 👋,</h1><br/>
            <h1 className={styles.C_2}>Im Manish R R,</h1><br/>
            <h1>
            <Typical
            steps={["I'm a full Stack Developer.", 1000, "I'm a Commited Person.", 1500,"I'm a Passionate Coder.",2000]}
            loop={Infinity}
            wrapper="p"
            />
            </h1>
            </div>
            <div className={styles.ContentBox}>
            <img src="code.png" alt="pic"/>
            </div>
           
        </motion.div>
    )
}
 