import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { HeaderSocialContainer } from "./styles";
import { motion } from "framer-motion";

export function HeaderSocial(){
  return (
    <HeaderSocialContainer>
    <motion.a  whileHover={{scale:1.5}} href="https://www.linkedin.com/in/tiago-souza-ba234b11a/" target="_blank"> <LinkedinLogo size={24}/> </motion.a>
    <motion.a  whileHover={{scale:1.5}}  href="https://github.com/tiago0214" target="_blank"> <GithubLogo size={24}/> </motion.a>
    </HeaderSocialContainer>
  )
}