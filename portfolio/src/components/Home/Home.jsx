import React from 'react'
import styles from "./home.module.css"
import Typical from 'react-typical'
export const Home = () => {
    return (
        <div>   
            <div className={styles.ContentBox}>
            <h1 className={styles.C_1}>Hi there! 👋,</h1><br/>
            <h1 className={styles.C_2}>Im Manish R R,</h1><br/>
            <h1>
            <Typical
            steps={["I'm a full Stack Developer.", 500, "I'm a Commited Person.", 500,"I'm a Passionate Coder.",500]}
            loop={Infinity}
            wrapper="p"
            />
            </h1>
            </div>
            <div className={styles.ContentBox}>
            <img src="code.png" alt="pic"/>
            </div>
        </div>
    )
}
