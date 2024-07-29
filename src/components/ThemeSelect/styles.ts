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
  margin-left: 5px;
  background-color: ${props => colors[props.variant]};

  cursor: pointer;
`;

export const ThemeContainer = styled.div`
  position: absolute;
  right: -2.3rem;
  bottom: 2rem;
  font-weight: 300;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
`