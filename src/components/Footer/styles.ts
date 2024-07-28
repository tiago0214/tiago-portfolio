import styled from "styled-components";

export const FooterContainer = styled.footer`
  background: ${props => props.theme.primary};
  padding: 1.5rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: 7rem;
  
  .footer--logo{
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1rem;
    display: inline-block;
  }

  a {
    color: ${props => props.theme["color-bg"]}
  }
`;

export const Permalinks =  styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto 1rem;

  @media screen and (max-width: 600px){
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const FooterSocials = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 1rem;

  & > a{
    background-color: ${props => props.theme["color-bg"]};
    color: ${props => props.theme.white};
    padding: 0.8rem;
    border-radius: 0.7rem;
    display: flex;
    border: 1px solid transparent;

  }

  .footer--link:hover{
    background: transparent;
    color: ${props => props.theme["color-bg"]};
    border-color: ${props => props.theme["color-bg"]};
  }

  @media screen and (max-width: 600px){
    margin-bottom: 2.6rem;
  }
`;

export const FooterCopyright = styled.div`
  margin-bottom: 5rem;
  color: ${props => props.theme["color-bg"]}
`;