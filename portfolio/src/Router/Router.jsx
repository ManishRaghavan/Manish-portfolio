import React from 'react'
import {Switch,Route} from "react-router-dom"
import { About } from '../components/AboutME/About'
import { Home } from '../components/Home/Home'
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
            <Route>
                <h1>404! Not found</h1>
            </Route>
            </Switch>
        </div>
    )
}
