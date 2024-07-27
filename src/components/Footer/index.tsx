import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FooterContainer, FooterCopyright, FooterSocials, Permalinks } from "./styles";

export function Footer(){
  return (
    <FooterContainer>
      <a href="#" className="footer--logo">Tiago Souza Dias</a>

      <Permalinks>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </Permalinks>

      <FooterSocials>
        <a href="https://github.com/tiago0214" className="footer--link"><GithubLogo size={24}/></a>
        <a href="https://www.linkedin.com/in/tiago-souza-ba234b11a/" className="footer--link"><LinkedinLogo size={24}/></a>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; Tiago Souza Dias. All Rights Reserved.</small>  
      </FooterCopyright>
    </FooterContainer>
  )
}