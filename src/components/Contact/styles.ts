import styled from "styled-components";

export const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 58%;
  gap: 12%;

  @media screen and (max-width: 1024px){
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  @media screen and (max-width: 600px){
    width: ${props => props.theme["container-width-sm"]};
  }
`;

export const ContactOptions =  styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
`

export const ContactOption = styled.article`
  background: ${props => props.theme["bg-variant"]};
  padding: 1.2rem;
  border-radius: 1.2rem;
  text-align: center;
  border: 1px solid transparent;
  transition: ${props => props.theme.transition};

  & > svg{
    margin-bottom: 0.5rem;
  }

  a{
    margin-top: 0.7rem;
    display: inline-block;
    font-size: 0.8rem;
  }

  h5{
    color: ${props => props.theme.light}
  }

  &:hover{
    background: rgb(0,0,0,0.2);
    border-color: ${props => props.theme["primary-variant"]};
  }
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  input,textarea{
    width: 100%;
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: transparent;
    border: 2px solid ${props => props.theme["primary-variant"]};
    resize: none;
    color:${props => props.theme.white}
  }
`;