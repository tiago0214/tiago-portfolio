import { AboutContainer, AboutContent, AboutMe, AboutMeImage, AboutParagraph } from "./styles";

import ME from '../../assets/about.png'
import { ArrowCircleRight } from "@phosphor-icons/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { AppContex } from "../../context";


export function About(){
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
      id="about"
    >
      <h5>{idiomPage.about.getToKnow}</h5>
      <h2>{idiomPage.about.aboutMe}</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt="about image" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutParagraph>

            <p><ArrowCircleRight/> {idiomPage.about.text1}</p>
            <p><ArrowCircleRight/> {idiomPage.about.text2}</p>
            <p><ArrowCircleRight/> {idiomPage.about.text3}</p>
            <p><ArrowCircleRight/> {idiomPage.about.text4}</p>

          </AboutParagraph>
          <a href="#contact" className="btn btn-primary">{idiomPage.about.letsTalk}</a>
        </AboutContent>
      </AboutContainer>
    </motion.section>
  )
}