import { Book, Chats, HouseLine, ProjectorScreenChart, User } from "@phosphor-icons/react";
import { NavBarContainer, NavBarLink } from "./styles";
import { useState } from "react";

export function NavBar(){
  const [activeNav, setActiveNav] = useState('#');

  console.log('render')
  return (
    <NavBarContainer>
      <NavBarLink 
        href="#" 
        onClick={() => setActiveNav('#')} 
        className= {activeNav === '#' ? 'active' : ''}
      ><HouseLine size={20}/>
      </NavBarLink>
      <NavBarLink 
        href="#about" 
        onClick={() => setActiveNav('#about')}
        className= {activeNav === '#about' ? 'active' : ''}
       ><User size={20}/> 
       </NavBarLink>
      <NavBarLink 
        href="#experience" 
        onClick={() => setActiveNav('#experience')} 
        className= {activeNav === '#experience' ? 'active' : ''}
      ><Book size={20}/>
      </NavBarLink>
      <NavBarLink 
        href="#projects" 
        onClick={() => setActiveNav('#projects')} 
        className= {activeNav === '#projects' ? 'active' : ''}
      ><ProjectorScreenChart size={20}/>
      </NavBarLink>
      <NavBarLink 
        href="#contact" 
        onClick={() => setActiveNav('#contact')}
        className= {activeNav === '#contact' ? 'active' : ''}
      > <Chats size={20}/>
      </NavBarLink>
    </NavBarContainer>
  )
}