import CottageIcon from '@mui/icons-material/Cottage';
import BadgeIcon from '@mui/icons-material/Badge';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import WorkIcon from '@mui/icons-material/Work';
import PaletteIcon from '@mui/icons-material/Palette';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';



import { NavBarContainer, NavBarLink } from "./styles";
import { useState } from "react";
import { ThemeSelect, ThemeSelectProps } from "../ThemeSelect";

export function NavBar({themeSelect}:ThemeSelectProps){
  const [activeNav, setActiveNav] = useState('#');
  const [showTheme, setShowTheme] = useState(false);

  function handleShowTheme(){
    if(showTheme === false){
      return setShowTheme(true)
    }
    return setShowTheme(false)
  }

  return (
    <NavBarContainer>
      <NavBarLink 
        title="home page"
        href="#" 
        onClick={() => setActiveNav('#')} 
        className= {activeNav === '#' ? 'active' : ''}
      >
        <CottageIcon/>
      </NavBarLink>
      <NavBarLink 
        title="about"
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className= {activeNav === '#about' ? 'active' : ''}
      >
        <BadgeIcon/> 
      </NavBarLink>
      <NavBarLink 
        title="experience"
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className= {activeNav === '#experience' ? 'active' : ''}
      >
        <AutoAwesomeIcon/>
      </NavBarLink>
      <NavBarLink 
        title="projects"
        href="#projects" 
        onClick={() => setActiveNav('#projects')} 
        className= {activeNav === '#projects' ? 'active' : ''}
      >
        <WorkIcon  />
      </NavBarLink>
      <NavBarLink 
        title="contact"
        href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className= {activeNav === '#contact' ? 'active' : ''}
      > 
        <ContactPhoneIcon/>
      </NavBarLink>
      
      <NavBarLink 
        onClick={() => handleShowTheme()} 
        title="color theme"
      > <PaletteIcon/>
        {showTheme ? <ThemeSelect themeSelect={themeSelect}/> : <div />}
      </NavBarLink>
      
    </NavBarContainer>
  )
}