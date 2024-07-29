import { ProjectItem, ProjectItemCta, ProjectItemImage, ProjectsContainer } from "./styles";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

import IMG1 from '../../assets/projectsImg/beauty.png'
import IMG2 from '../../assets/projectsImg/portfolio.png'

const data = [
  {
      id: 1,
      image : IMG1,
      title: "Beauty Company Web Site",
      github: "https://github.com/tiago0214/beauty-company-project",
      deploy:  "https://beauty-company-project.vercel.app/"
  },
  {
    id: 2,
    image : IMG2,
    title: "Old portfolio",
    github: "https://github.com/tiago0214/portfolio_V2",
    deploy:  "https://portfolio-v2-omega-six.vercel.app/"
  }
]
interface DataProps {
  id: number
  image: string
  title: string
  github: string
  deploy?: string
}


export function Projects(){
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
      <h5>My Recent</h5>
      <h2>Projects</h2>

      <ProjectsContainer className="container">
        {
          data.map(({id,image,title,github,deploy}:DataProps) => {
            return (
              <ProjectItem key={id}>
                <ProjectItemImage><img src={image} alt="" /></ProjectItemImage>
                <h3>{title}</h3>
                <ProjectItemCta> 
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={deploy} className="btn btn-primary" target="_blank">Deploy</a>
                </ProjectItemCta>
              </ProjectItem>
            )
          })
        }
        
      </ProjectsContainer>
    </motion.section>
  )
}