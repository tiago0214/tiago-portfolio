import { HeaderContainer, HeaderContent, MeContainer } from "./styles";
import { Cta } from "./components/Cta/index";
import { HeaderSocial } from "./components/HeaderSocial";

import ME from '../../assets/ME.png'

import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export function Header(){
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
    <HeaderContainer 
      ref={ref}
      as={motion.header} 
      variants={{
        initial: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="initial"
      animate= {mainControls}
      transition={{ duration: 1, delay: 0.2}}
    >
      <HeaderContent className="container">
        <h5>Hello I'm</h5>
        <h1>Tiago Dias</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />

        <HeaderSocial />

        <MeContainer>
          <img src={ME} alt="me" />
        </MeContainer>

      </HeaderContent>
    </HeaderContainer>
  )
}