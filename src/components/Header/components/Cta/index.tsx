import { CtaLink, CtaContainer } from "./styles";

import CV from '../../../../assets/cv.pdf'

export function Cta(){
  return (
    <CtaContainer >
      <CtaLink href={CV} className="btn" target="_blank">View CV</CtaLink>
      <CtaLink href="#contact" className="btn btn-primary">Let's Talk</CtaLink>
    </CtaContainer>
  )
}