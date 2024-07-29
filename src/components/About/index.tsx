import { AboutContainer, AboutContent, AboutMe, AboutMeImage, AboutParagraph } from "./styles";

import ME from '../../assets/about.png'
import { ArrowCircleRight } from "@phosphor-icons/react";

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";


export function About(){
  const ref = useRef(null);
  const isInView = useInView(ref,{
    once: true
  });

  useEffect(()=>{
    console.log(isInView)
  },[isInView])

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
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt="about image" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <AboutParagraph>

            <p><ArrowCircleRight/> Hi there!</p>
            <p><ArrowCircleRight/>  I'm a web developer and right now, I'm pursuing a degree in Software Engineering.</p>
            <p><ArrowCircleRight/>  I've specialized as a full-stack developer, so I work with React on the frontend and use Node.js and C# on the backend. When it comes to JavaScript, I usually go with TypeScript.</p>
            <p><ArrowCircleRight/> I'm from Brazil, but I'm pretty flexible about working remotely or on-site from just about anywhere. Oh, and I speak both Portuguese and English.</p>

          </AboutParagraph>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </AboutContent>
      </AboutContainer>
    </motion.section>
  )
}