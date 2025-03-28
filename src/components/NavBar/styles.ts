import styled from "styled-components";

export const NavBarContainer = styled.nav`
  background: rgba(0,0,0,0.3) ;
  width: max-content;
  padding: 0.7rem 1.7rem;
  z-index: 2;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 2rem;
  display: flex;
  gap: 0.8rem;
  border-radius: 3rem;
  backdrop-filter: blur(15px);

  transition: ${props => props.theme.transition};

`;

export const NavBarLink = styled.a`
  background: transparent;
  padding: 0.7rem;
  border-radius: 50%;
  display: flex;
  color: ${props => props.theme.light};
  font-size: 1.1rem;
  transition: ${props => props.theme.transition};
  cursor: pointer;

  &:hover{
    background: rgba(0,0,0,0.3);
  }

  &.active{
    background: ${props => props.theme.primary};
    color: ${props => props.theme["color-bg"]}
  }
`
