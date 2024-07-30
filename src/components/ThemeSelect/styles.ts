import styled from "styled-components";


interface ColorsButtonProps {
  variant: 'default' | 'orange' | 'beige' | 'blue' | 'purple';
 }

const colors ={
  default: '#64CCC5',
  orange: '#e9c46a',
  beige: '#DFD0B8',
  blue: '#74BBE3',
  purple: '#c77dff'
}

export const ButtonSelect = styled.button<ColorsButtonProps>`
  padding: 10px;
  border-radius: 50%;
  border: 2px solid black;
  background-color: ${props => colors[props.variant]};
  transition: ${props => props.theme.transition};

  cursor: pointer;
`;

export const ThemeContainer = styled.div`
  position: absolute;
  bottom: 4rem;
  font-weight: 300;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  gap: 2px;
  cursor: pointer;

  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
`
