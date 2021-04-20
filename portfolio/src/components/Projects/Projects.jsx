import React from "react";
import styles from "./projects.module.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCss3, faGithub, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";


export const Projects = () => {

    const data=[
        {title:"Rev.co",span:"the car rental service",img:"rev.jpg",
        para:`Connected With peers for 3 days to develop the product. I written the code most
        for backend using Node.js and I have also worked in rental page and payment page using react, css.
        The data is hanlded with the help of MongoDB .For that I have used MongoDB Cloud `,tech:[faReact,faNodeJs,faJs],git:true,live:false},

        {title:"Tic Tac Toe",span:"game",img:"tic tac game.png",
        para:`Worked My self for 4 hours to complete the game.  I have use react and javascript to bulid the game.
         I have implemented multiplayers future and I have also
         implemented Ai to play. The Ai is built on the minimax algorithms . For that I have used
         minimax npm .`,tech:[faReact,faCss3,faJs],git:true,live:true,link:""},

        {title:"Codepen",span:"social development environment",img:"codepen.png",
        para:`Worked My self for 2 hours to complete the codepen. I have use react and javascript to bulid the codepen.
          I have implemented the code editor for html, css, js. For code editor I have used 
          codemirror and with simple javascript I have implemented the display box .`,tech:[faReact,faCss3,faJs],git:true,live:true,link:""},
          
        {title:"Goodreads",span:"site for book recommendations",img:"rev.jpg",
        para:`Collaborated with team of four developers for
        three days, worked in the chat system,
        description page with the tech stack of React,
        CSS, JavaScript.I worked in the part where user can add book to group and comment on books.
        I have achieved the chat system with simple api implement . `,tech:[faReact,faCss3,faJs],git:true,live:false}
    ]

  return (
    <div className={styles.content}>
      {data.map(item=>(
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
                    <div className={styles.btn}>
                    <FontAwesomeIcon className={styles.btnLogo} icon={faGithub}/><p>GitHub</p>
                    </div>
                    <a className={styles.btn} id={item.live===false?styles.disable:null} href="/works">
                    <FontAwesomeIcon className={styles.btnLogo}  icon={faLink}/><p>{item.live===false?"Not live":"Live"}</p>
                    </a>
            </div> 
          
          </div> 
        </div>
      ))}

    
    </div>
  );
};
