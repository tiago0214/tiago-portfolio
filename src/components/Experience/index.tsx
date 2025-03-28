import { ExperienceContainer, TechIcon } from "./styles";

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { AppContex } from "../../context";
import { FaDocker, FaGitAlt, FaGithub, FaLinux, FaNodeJs, FaReact } from 'react-icons/fa';
import { TbBrandTypescript } from 'react-icons/tb';
import { RiJavascriptLine } from 'react-icons/ri';
import { SiPostgresql } from 'react-icons/si';
import { BiLogoMongodb } from 'react-icons/bi';
import { DiMysql } from 'react-icons/di';
import { AiOutlineConsoleSql } from 'react-icons/ai';


export function Experience(){
  const { idiomPage } = useContext(AppContex);

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
      id="experience"
    >
      <h5>{idiomPage.experience.skillsThatIHave}</h5>
      <h2>{idiomPage.experience.myExperience}</h2>

      <ExperienceContainer >
        <TechIcon>
          <FaReact size={48}/>
          <span>React</span>
        </TechIcon>

        <TechIcon>
          <RiJavascriptLine size={48}/>
          <span>JavaScript</span>
        </TechIcon>

        <TechIcon>
          <TbBrandTypescript size={48}/>
          <span>Typescript</span>
        </TechIcon>

        <TechIcon>
          <FaNodeJs size={48}/>
          <span>NodeJS</span>
        </TechIcon>

        <TechIcon>
          <AiOutlineConsoleSql  size={48}/>
          <span>SQL</span>
        </TechIcon>

        <TechIcon>
          <SiPostgresql size={48}/>
          <span>Postgresql</span>
        </TechIcon>

        <TechIcon>
          <DiMysql size={48}/>
          <span>MySql</span>
        </TechIcon>

        <TechIcon>
          <BiLogoMongodb  size={48}/>
          <span>MongoDB</span>
        </TechIcon>

        <TechIcon>
          <FaGitAlt size={48}/>
          <span>Git</span>
        </TechIcon>

        <TechIcon>
          <FaGithub size={48}/>
          <span>GitHub</span>
        </TechIcon>

        <TechIcon>
          <FaLinux size={48}/>
          <span>Linux</span>
        </TechIcon>

        <TechIcon>
          <FaDocker size={48}/>
          <span>Docker</span>
        </TechIcon>
      </ExperienceContainer>
    </motion.section>
  )
}
