import React from 'react'
import {Switch,Route} from "react-router-dom"
import { About } from '../components/AboutME/About'
import { Contacts } from '../components/Contacts/Contacts'
import { Home } from '../components/Home/Home'
import { Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'
import styles from "./router.module.css"
export const Router = (props) => {
    return (
        <div className={styles.box}>
            <Switch>       
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/skills">
                <Skills/>
            </Route>
            <Route exact path="/contacts">
                <Contacts/>
            </Route>
            <Route exact path="/works">
                <Projects/>
            </Route>
            <Route>
                <img style={{margin:"150px auto"}} src="404.png" alt="error"/>
            </Route>
            </Switch>
        </div>
    )
}
