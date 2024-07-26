import styled from "styled-components";

export const HeaderSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  gap: 0.8rem;
  left: 0;
  bottom: 3rem;

  &::after{
    content: '';
    width: 1px;
    height: 2rem;
    background-color: ${props => props.theme.primary};
  }

  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
`;