import { motion, useAnimation, useInView } from "framer-motion";
import { ButtonSelect, ThemeContainer } from "./styles";
import { useEffect, useRef } from "react";

export type ColorTheme = 'default' | 'orange' | 'beige' | 'blue' | 'purple';

export interface ThemeSelectProps{
  themeSelect?: (theme:ColorTheme) => void ,
  activeColor?: string
}

export function ThemeSelect({themeSelect}: ThemeSelectProps){

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
      <ThemeContainer >
        <ButtonSelect ref={ref}
        as={motion.div} 
        variants={{
          initial: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="initial"
        animate= {mainControls}
        transition={{ duration: 1, delay: 0.05}} variant="default" onClick={() => themeSelect!('default')}/>
        
        <ButtonSelect ref={ref}
        as={motion.div} 
        variants={{
          initial: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="initial"
        animate= {mainControls}
        transition={{ duration: 1, delay: 0.04}} variant="beige" onClick={() => themeSelect!('beige')}/>

        <ButtonSelect ref={ref}
        as={motion.div} 
        variants={{
          initial: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="initial"
        animate= {mainControls}
        transition={{ duration: 1, delay: 0.03}} variant="blue" onClick={() => themeSelect!('blue')}/>

        <ButtonSelect ref={ref}
        as={motion.div} 
        variants={{
          initial: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="initial"
        animate= {mainControls}
        transition={{ duration: 1, delay: 0.02}} variant="orange" onClick={() => themeSelect!('orange')}/>

        <ButtonSelect ref={ref}
        as={motion.div} 
        variants={{
          initial: { opacity: 0, y: 0 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="initial"
        animate= {mainControls}
        transition={{ duration: 1, delay: 0.01}} variant="purple" onClick={() => themeSelect!('purple')}/>
      </ThemeContainer>
  )
}