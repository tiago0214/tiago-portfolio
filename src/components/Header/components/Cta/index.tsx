import { CtaLink, CtaContainer } from "./styles";

import CvPt from '../../../../assets/TiagoDias-pt.pdf';
import CvEn from '../../../../assets/TiagoDias-en.pdf';

import { useContext } from "react";
import { AppContex } from "../../../../context";

export function Cta(){

  const {idiomPage, languageType} = useContext(AppContex);

  return (
    <CtaContainer >
      <CtaLink
        whileHover={{scale:1.1}}
        href={languageType === 'en' ? CvEn : CvPt} 
        className="btn" 
        target="_blank">{idiomPage.home.buttonCv}
      </CtaLink>
      
      <CtaLink 
        whileHover={{scale:1.1}} 
        href="#contact" 
        className="btn btn-primary">{idiomPage.home.buttonTalk}
      </CtaLink>
    </CtaContainer>
  )
}