import { Book, Chats, Folders, HouseLine, Palette, User } from "@phosphor-icons/react";
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
      ><HouseLine size={20}/>
      </NavBarLink>
      <NavBarLink 
        title="about"
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className= {activeNav === '#about' ? 'active' : ''}
       ><User size={20}/> 
       </NavBarLink>
      <NavBarLink 
        title="experience"
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className= {activeNav === '#experience' ? 'active' : ''}
      ><Book size={20}/>
      </NavBarLink>
      <NavBarLink 
        title="projects"
        href="#projects" 
        onClick={() => setActiveNav('#projects')} 
        className= {activeNav === '#projects' ? 'active' : ''}
      ><Folders size={20}/>
      </NavBarLink>
      <NavBarLink 
        title="contact"
        href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className= {activeNav === '#contact' ? 'active' : ''}
      > <Chats size={20}/>
      </NavBarLink>
      
      <NavBarLink 
        onClick={() => handleShowTheme()} 
        title="color theme"
      > <Palette size={20}/>
        {showTheme ? <ThemeSelect themeSelect={themeSelect}/> : <div />}
      </NavBarLink>
      
    </NavBarContainer>
  )
}