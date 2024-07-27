import styled from "styled-components";

export const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  @media screen and (max-width: 1024px){
    &{
      grid-template-columns: 1fr;
    }
  }
  @media screen and (max-width: 600px){
    &{
      gap: 1rem;
    }
  }
  

  & > div{
    background: ${props => props.theme["bg-variant"]};
    padding: 2.4rem 5rem;
    border-radius: 2rem;
    border: 1px solid transparent;
    transition: ${props => props.theme.transition};

    & > h3 {
      text-align: center;
      margin-bottom: 2rem;
      color: ${props => props.theme.primary};
    }

    &:hover{
      background: transparent;
      border-color: ${props => props.theme["primary-variant"]};
      cursor: default;
    }

    @media screen and (max-width: 1024px){
      width: 80%;
      padding: 2rem;
      margin: 0 auto;
    }

    @media screen and (max-width: 600px){
      &{    
        width: 100%;
        padding: 2rem 1rem;
      }
    }
  }
`;

export const ExperienceContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* row-gap: 2rem; */
  gap: 2rem;

  article{
    display: flex;
    gap: 1rem;
    align-items: center;
  }

  @media screen and (max-width: 1024px){
    &{
      padding: 1rem;
    }
  }
  @media screen and (max-width: 600px){
    &{
      gap: 0;

    }
  }
`