import VerifiedIcon from '@mui/icons-material/Verified';
import { ExperienceContainer, ExperienceContent } from "./styles";

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { ThemeSelectProps } from "../ThemeSelect";
import { AppContex } from "../../context";


export function Experience({activeColor}:ThemeSelectProps){
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
      <h5>{idiomPage.experience.skillsThatIHave}</h5>
      <h2>{idiomPage.experience.myExperience}</h2>

      <ExperienceContainer className="container">
        <div>
          <h3>{idiomPage.experience.frontendDev}</h3>

          <ExperienceContent>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }} />
              <h4>React</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>Tailwind</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>StyledComponents</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>JavaScript</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>TypeScript</h4>
            </article>
          </ExperienceContent>
        </div>

        <div>
          <h3>{idiomPage.experience.backendDev}</h3>

          <ExperienceContent>
          <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>Node</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small"  sx={{ color: colorIcon }}/>
              <h4>Typescript</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>Fastify</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>Express</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>C#</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>.NET</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>MySQL</h4>
            </article>
            <article>
              <VerifiedIcon fontSize="small" sx={{ color: colorIcon }}/>
              <h4>Postgres</h4>
            </article>
          </ExperienceContent>
        </div>
      </ExperienceContainer>
    </motion.section>
  )
}