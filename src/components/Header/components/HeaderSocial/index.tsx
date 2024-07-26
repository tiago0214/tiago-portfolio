import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { HeaderSocialContainer } from "./styles";

export function HeaderSocial(){
  return (
    <HeaderSocialContainer>
    <a href="https://www.linkedin.com/in/tiago-souza-ba234b11a/" target="_blank"> <LinkedinLogo size={24}/> </a>
    <a href="https://github.com/tiago0214" target="_blank"> <GithubLogo size={24}/> </a>
    </HeaderSocialContainer>
  )
}