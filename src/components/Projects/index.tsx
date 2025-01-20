import { ProjectItem, ProjectItemCta, ProjectItemImage, ProjectsContainer } from "./styles";

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { AppContex } from "../../context";


import IMG1 from '../../assets/projectsImg/beauty.png'
import GITHUB from '../../assets/projectsImg/github.jpeg'
import LOGIN from '../../assets/projectsImg/login.png'
import TODO from '../../assets/projectsImg/todo.png'

const data = [
  {
    id: 1,
    image : IMG1,
    info: "A web commerce platform: JavaScript",
    github: "https://github.com/tiago0214/beauty-company-project",
    deploy:  "https://beauty-company-project.vercel.app/"
  },
  {
    id: 2,
    image: LOGIN,
    info: "App for manager user data: TypeScript",
    github: "https://github.com/tiago0214/login-page"
  },
  {
    id: 3,
    image : GITHUB,
    info: "App that integrate with Google API: C#",
    github: "https://github.com/tiago0214/challenge-google-sheets",
  },
  {
    id: 4,
    image : GITHUB,
    info: "App for decoding messages: JavaScript",
    github: "https://github.com/tiago0214/encoding-challenge",
  },
  {
    id: 5,
    image: TODO,
    info: 'To do list app: Typescript',
    github: "https://github.com/tiago0214/to-do-list"
  }
]

interface DataProps {
  id: number
  image: string
  info: string
  github: string
  deploy?: string
}

export function Projects(){
  const {idiomPage} = useContext(AppContex);

  const ref = useRef(null);
  const isInView = useInView(ref,{
    once: true
  });

  const mainControls = useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start('visible')
    }

  },[isInView,mainControls])

  return (
    <motion.section 
      ref={ref} 
      variants={{
        initial: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="initial"
      animate= {mainControls}
      transition={{ duration: 1, delay: 0.2}}
      id="projects"
    >
      <h5>{idiomPage.projects.myRecent}</h5>
      <h2>{idiomPage.projects.projects}</h2>

      <ProjectsContainer className="container">
        {
          data.map(({id,image,info,github,deploy}:DataProps) => {
            return (
              <ProjectItem key={id}>
                <ProjectItemImage><img src={image} alt="" /></ProjectItemImage>
                <p>{info}</p>
                <ProjectItemCta> 
                  <a href={github} className="btn" target="_blank">Github</a>
                  
                  {deploy && <a href={deploy} className="btn btn-primary" target="_blank">Deploy</a>}
                </ProjectItemCta>
              </ProjectItem>
            )
          })
        }
        
      </ProjectsContainer>
    </motion.section>
  )
}