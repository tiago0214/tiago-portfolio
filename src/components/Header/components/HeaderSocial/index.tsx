import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { HeaderSocialContainer } from "./styles";
import { motion } from "framer-motion";

export function HeaderSocial(){
  return (
    <HeaderSocialContainer>
      <motion.a  whileHover={{scale:1.5}} href="https://www.linkedin.com/in/tiagodias-dev/" target="_blank"> <LinkedInIcon sx={{ fontSize: 24 }}/> </motion.a>
      <motion.a  whileHover={{scale:1.5}}  href="https://github.com/tiago0214" target="_blank"> <GitHubIcon sx={{ fontSize: 24 }}/> </motion.a>
    </HeaderSocialContainer>
  )
}