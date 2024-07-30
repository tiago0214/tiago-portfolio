import { SealCheck } from "@phosphor-icons/react";
import { ExperienceContainer, ExperienceContent } from "./styles";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { ThemeSelectProps } from "../ThemeSelect";


export function Experience({activeColor}:ThemeSelectProps){
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


  const colorIcon = activeColor;

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
      <h5>Skills That I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer className="container">
        <div>
          <h3>Frontend Development</h3>

          <ExperienceContent>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>React</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Tailwind</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>StyledComponents</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>NextJS</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>JavaScript</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>TypeScript</h4>
            </article>
          </ExperienceContent>
        </div>

        <div>
          <h3>Backend Development</h3>

          <ExperienceContent>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>NodeJS</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>TypeScript</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Express</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>C#</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>MongoDB</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Postgres</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>MySQL</h4>
            </article>
          </ExperienceContent>
        </div>
      </ExperienceContainer>
    </motion.section>
  )
}