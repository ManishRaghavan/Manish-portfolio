import React from "react";
import styles from "./projects.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faNpm, faReact } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faLink } from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion"
import Slide from 'react-reveal/Slide';

export const Projects = () => {

    const data=[
        {title:"Rev.co",span:"the car rental service",img:"rev.jpg",
        para:`Connected With peers for 3 days to develop the product. I written the code most
        for backend using Node.js and I have also worked in rental page and payment page using react, css.
        The data is handled with the help of MongoDB .For that I have used MongoDB Cloud `,tech:[faReact,faNodeJs,faJs,faDatabase],git:true,live:true,
        Glink:"https://github.com/iharshgaur/Revv-Clone",Llink:"https://revvcars.netlify.app/"},

        {title:"Tic Tac Toe",span:"game",img:"tic tac game.png",
        para:`Worked My self for 4 hours to complete the game.  I have use react and javascript to bulid the game.
         I have implemented multiplayers future and I have also
         implemented Ai to play. The Ai is built on the minimax algorithms . For that I have used
         minimax npm .`,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true,Glink:"https://github.com/ManishRaghavan/tic_tac_toe"
         ,Llink:"https://manish-tic-tac-toe.netlify.app/"},

        {title:"Codepen",span:"social development environment",img:"codepen.png",
        para:`Worked My self for 2 hours to complete the codepen. I have use react and javascript to bulid the codepen.
          I have implemented the code editor for html, css, js. For code editor I have used 
          codemirror and with simple javascript I have implemented the display box .`,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true
          ,Glink:"https://github.com/ManishRaghavan/codepen",Llink:"https://manish-codepen.netlify.app/"},
          
        {title:"Goodreads",span:"book recommendations site",img:"goodreads.png",
        para:`Collaborated with team of three developers for
        three days, worked in the chat system,
        description page with the tech stack of React,
        CSS, JavaScript.I worked in the part where user can add book to group and comment on books.
        I have achieved the chat system with simple api implement . `,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:false
        ,Glink:"https://github.com/SaravanakumarJN/Goodreads---Charlie",Llink:"/works"},

        {title:"Sparkpeople",span:"food recommendations site",img:"sp1.jpg",
        para:`As my first projects I Collaborated with team of 2 developers for
        three days,I have worked on the main page where we can track the calories in food and water
        consumption per day .Also worked on the spin wheel where can get points to 
        use in the premium content. `,tech:[faHtml5,faCss3,faJs,faNpm],git:true,live:false
        ,Glink:"https://github.com/ManishRaghavan/sparkpeople_project",Llink:"/works"}
    ]
 
 
  return (

    <motion.div className={styles.content}   initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
      {data.map(item=>(
        <Slide right>
        <div className={styles.box}>
          <div className={styles.imgBox}>
            <img src={item.img} alt="pic" />
            
            <h3 className={styles.Heading}>{item.title} -<span className={styles.HeadingSpan}>{item.span}</span></h3>
            
            <p className={styles.para}>
              {item.para}
              </p>
              <div className={styles.techStack}>
                  {item.tech.map(it=>(
                <FontAwesomeIcon className={styles.logo} icon={it}/> 
                  ))}        
            </div>
            <div className={styles.buttonBox}>
                    <a className={styles.btn} href={item.Glink} target="blank">
                    <FontAwesomeIcon className={styles.btnLogo} icon={faGithub}/><p>GitHub</p>
                    </a>
                    <a className={styles.btn} id={item.live===false?styles.disable:null} href={item.Llink} target="blank">
                    <FontAwesomeIcon className={styles.btnLogo}  icon={faLink}/><p>{item.live===false?"Demo":"Demo"}</p>
                    </a>
            </div> 
          
          </div> 
        </div>
        </Slide>
      ))}
     
    </motion.div>
  );
};
