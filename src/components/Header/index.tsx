import { FlagContainer, HeaderContainer, HeaderContent, MeContainer, ScrollContainer } from "./styles";
import { Cta } from "./components/Cta/index";
import { HeaderSocial } from "./components/HeaderSocial";

import ME from '../../assets/ME.png'

import { motion, useInView, useAnimation } from "framer-motion";
import { useContext, useEffect, useRef } from "react";
import { AppContex } from "../../context";

import BR from '../../assets/flags/br.svg'
import US from '../../assets/flags/us.svg'

export function Header(){
  const {idiomPage, setLanguageType} = useContext(AppContex);

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
        <h5>{idiomPage.home.welcome}</h5>
        <h1>Tiago Dias</h1>
        <h5 className="text-light">{idiomPage.home.title}</h5>
        <Cta />

        <HeaderSocial />

        <MeContainer>
          <img src={ME} alt="me" />
        </MeContainer>

        <ScrollContainer>
          <FlagContainer><img src={BR} alt="" onClick={() => setLanguageType('pt')}/></FlagContainer>
          <FlagContainer><img src={US} alt="" onClick={() => setLanguageType('en')}/></FlagContainer>
        </ScrollContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}