import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { FooterContainer, FooterCopyright, FooterSocials, Permalinks } from "./styles";
import { useContext } from "react";
import { AppContex } from "../../context";

export function Footer(){
  const { idiomPage } = useContext(AppContex);

  return (
    <FooterContainer>
      <a href="#" className="footer--logo">Tiago Souza Dias</a>

      <Permalinks>
        <li><a href="#">{idiomPage.footer.home}</a></li>
        <li><a href="#about">{idiomPage.footer.about}</a></li>
        <li><a href="#experience">{idiomPage.footer.experience}</a></li>
        <li><a href="#projects">{idiomPage.footer.projects}</a></li>
        <li><a href="#contact">{idiomPage.footer.contact}</a></li>
      </Permalinks>

      <FooterSocials>
        <a href="https://github.com/tiago0214" className="footer--link" target="_blank"><GitHubIcon sx={{ fontSize: 24 }}/></a>
        <a href="https://www.linkedin.com/in/tiago-souza-ba234b11a/" className="footer--link" target="_blank"><LinkedInIcon sx={{ fontSize: 24 }}/></a>
      </FooterSocials>

      <FooterCopyright>
        <small>&copy; Tiago Souza Dias. {idiomPage.footer.copy}</small>  
      </FooterCopyright>
    </FooterContainer>
  )
}