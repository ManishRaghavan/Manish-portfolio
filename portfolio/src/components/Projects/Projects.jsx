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
        para:`Connected with two more developers for 3 days to develop the product. I written the code most
        for backend using Node.js and I have also worked in rental page and payment page using react, css.
        The data is handled with the help of MongoDB and the data is stored in Cloud.`,tech:[faReact,faNodeJs,faJs,faDatabase],git:true,live:true,
        Glink:"https://github.com/iharshgaur/Revv-Clone",Llink:"https://revvcars.netlify.app/"},

        {title:"CoderJam",span:"Medical based application",img:"coderjam.jpg",
        para:`Connected with 2 more developers for an hackathon. We came up with an idea of medical based application,where
         the patient can browse information about oxygen cylinders, number of beds, doctor information by using map.I was responsible 
         for the map and backend. We have used Next.js for this application `,tech:[faReact,faNodeJs,faJs,faDatabase],git:true,live:true,
        Glink:"https://github.com/ManishRaghavan/CoderJAM",Llink:"https://drive.google.com/file/d/1hHkKWfRMFkR2y-kMnE9snRx41N16A-FC/view?usp=sharing"},

        {title:"Tic Tac Toe",span:"game",img:"tic tac game.png",
        para:`Worked myself for 4 hours to complete the game. I have used react and javascript to bulid the game.
         I have implemented multiplayers feature and I have also
         implemented Ai to play. The Ai was built with the help of minimax algorithms.`,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true,Glink:"https://github.com/ManishRaghavan/tic_tac_toe"
         ,Llink:"https://manish-tic-tac-toe.netlify.app/"},

        {title:"Codepen",span:"social development environment",img:"codepen.png",
        para:`Worked myself for 2 hours to complete the codepen. I have used react and javascript to bulid the codepen.
          I have implemented the code editor for html, css, js. For code editor I have used 
          codemirror.I have used npm package to create codemirror.`,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true
          ,Glink:"https://github.com/ManishRaghavan/codepen",Llink:"https://manish-codepen.netlify.app/"},
          
        {title:"Goodreads",span:"book recommendations site",img:"goodreads.png",
        para:`Collaborated with team of three developers for
        three days, worked in the chat system,
        description page with the tech stack of React,
        CSS, JavaScript.I worked in the part where user can add book to group and comment on books.
        I have achieved the chat system with an API. `,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true
        ,Glink:"https://github.com/SaravanakumarJN/Goodreads---Charlie",Llink:"https://drive.google.com/file/d/1EOL9gKjTDNeqbO84eelteSUMiWwna7JM/view?usp=sharing"},

        {title:"Sparkpeople",span:"food recommendations site",img:"sp1.jpg",
        para:`As my first projects I Collaborated with team of 2 developers for
        three days,I have worked on the main page where we can track the calories of food and water
        consumed per day by us. Also worked on the spin wheel where we can get points to 
        use in the premium content.`,tech:[faHtml5,faCss3,faJs,faNpm],git:true,live:true
        ,Glink:"https://github.com/ManishRaghavan/sparkpeople_project",Llink:"https://drive.google.com/file/d/1d6YYBIq1T4wSjN69KZbOEvmwnBX6Yd5H/view?usp=sharing"},

        {title:"Fashion app",span:"Simple react app",img:"fashion store.png",
        para:`As my first react app I created the fashion store on my own. I have implemented the features
        where user can search the costumes the like. Also they can add or delete the products in the cart.
        Filtering option is also available. I have used my own UI design and color patterns.`,tech:[faHtml5,faCss3,faJs,faReact],git:true,live:true
        ,Glink:"https://github.com/masai-course/ti_063-manish/tree/master/unit-3/sprint-3/day-4/Cart%20Project/New%20folder/shopping-app",
        Llink:"https://drive.google.com/file/d/17XEAjYMWykoooVPodvuKTtEy0MXYqT5F/view?usp=sharing"}
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
