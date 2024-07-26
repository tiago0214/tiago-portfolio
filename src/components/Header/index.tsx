import { HeaderContainer, HeaderContent, MeContainer, ScrollDownLink } from "./styles";
import { Cta } from "./components/Cta/index";
import { HeaderSocial } from "./components/HeaderSocial";

import ME from '../../assets/ME.png'

export function Header(){
  return (
    <HeaderContainer>
      <HeaderContent className="container">
        <h5>Hello I'm</h5>
        <h1>Tiago Dias</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <Cta />

        <HeaderSocial />

        <MeContainer>
          <img src={ME} alt="me" />
        </MeContainer>

        <ScrollDownLink>Scroll Down</ScrollDownLink>
      </HeaderContent>
    </HeaderContainer>
  )
}