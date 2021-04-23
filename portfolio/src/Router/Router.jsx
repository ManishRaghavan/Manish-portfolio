import { AnimatePresence } from 'framer-motion'
import React from 'react'
import {Switch,Route, useLocation} from "react-router-dom"
import { About } from '../components/AboutME/About'
import { Contacts } from '../components/Contacts/Contacts'
import { Home } from '../components/Home/Home'
import { Projects } from '../components/Projects/Projects'
import { Skills } from '../components/Skills/Skills'
import styles from "./router.module.css"
export const Router = (props) => {

    const[state,setState] = React.useState(false)
    const location = useLocation()
    React.useEffect(()=>{
        const timer = setTimeout(()=>{

            setState(true)
        },1500)
        setState(false)
        return ()=>clearTimeout(timer)
    },[location])
    
    //<img  src="12.gif"  alt="pic"/>
    return (
        <div className={styles.box}>
            <AnimatePresence exitBeforeEnter>

            <Switch>       
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                {state===false?<img className={styles.loading}  src="loader.gif"  alt="pic"/>:
                 <About/>
                }
            </Route>
            <Route exact path="/skills">
            {state===false?<img className={styles.loading}  src="loader.gif"   alt="pic"/>:
                <Skills/>
            }
            </Route>
            <Route exact path="/contacts">
            {state===false?<img className={styles.loading}  src="loader.gif"   alt="pic"/>:
             
             <Contacts/>
            }
            </Route>
            <Route exact path="/works">
            {state===false?<img className={styles.loading}  src="loader.gif"   alt="pic"/>:
                <Projects/>
            }
            </Route>
            <Route>
                <img style={{margin:"150px auto"}} src="404.png" alt="error"/>
            </Route>
            </Switch>
            </AnimatePresence>
        </div>
    )
}
