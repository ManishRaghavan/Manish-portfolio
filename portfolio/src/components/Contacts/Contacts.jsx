import React from 'react'
import styles from "./contacts.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import {db} from "../../firebase/firebase"

export const Contacts = () => {

    const[form,setform] = React.useState({
        Name:"",
        Email:"",
        Message:""
    })
    
    const data =[
        {content:"manish.mahendran9499@gmail.com",logo:faEnvelope},
        {content:"+91-8610206691",logo:faPhoneAlt},
        {content:"Salem, Tamil Nadu, India",logo:faMapMarkedAlt},
    ]

    const data2 =[
        {content:"https://www.linkedin.com/in/manish-raghavan/",logo:faLinkedin},
        {content:"https://github.com/ManishRaghavan",logo:faGithub},
        {content:"https://twitter.com/manishraghavan4",logo:faTwitter},
        {content:"https://www.instagram.com/manish_raghavan_/",logo:faInstagram},

    ]

    const hanldeChange=(e)=>{
        const {value,name} = e.target
        setform({...form,[name]:value})
        console.log(form)
    }

    const hanldeSend = (e)=>{
        e.preventDefault()
        db.collection("contacts").add({form}).then(()=>{
            alert("The message has been sended\n\n Thank You 🤗 ")
        }).catch((err)=>{
            alert(err.message)
        })

        return setform({
            Name:"",
            Email:"",
            Message:""
        })
    }


    return (
        <div>
            <div className={styles.box1}>
                <p className={styles.heading}>If you want to talk to me,<br/>
                You can find me at:</p>
                {data.map(item=>(
                    <div className={styles.ContactBox}>
                <FontAwesomeIcon icon={item.logo} className={styles.logo} />
                <p className={styles.word}>{item.content}</p>
                </div>
                ))}
                <div className={styles.socialBox}>
                   {data2.map(item=>(
                       <a href={item.content} target="blank">
                        <div className={styles.circle}>
                        <FontAwesomeIcon icon={item.logo}  className={styles.SocialLogo}/>
                    </div></a>
                   ))}
                </div>
            </div>
            <div className={styles.box2} >
            <p className={styles.heading}>You can send a quick message</p>
            <input onChange={hanldeChange} type="text" name="Name" placeholder="Name" className={styles.input} value={form.Name}/>
            <input onChange={hanldeChange} type="text" name="Email" placeholder="example@gmail.com" className={styles.input} value={form.Email}/>
            <textarea onChange={hanldeChange} name="Message" cols="30" rows="10" placeholder="your message" className={styles.input2} value={form.Message}></textarea>
            <div onClick={hanldeSend} className={styles.button}>
               <p style={{paddingLeft:"10px"}}>Send Message</p>
            </div>
            </div>
        </div>
    )
}
