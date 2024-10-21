import styled from "styled-components";

export const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 35% 50%;
  gap: 15%;

  @media screen and (max-width: 1024px){
    &{
      grid-template-columns: 1fr;
      gap: 0;
    }
  }
`;

export const AboutMe = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  border-radius: 2rem;
  background: linear-gradient(45deg,transparent,${props => props.theme.primary},transparent);
  display: grid;
  /* place-items: center; */

  @media screen and (max-width: 1024px){
    &{
      width: 50%;
      margin: 2rem auto 4rem;
    }
  }
  @media screen and (max-width: 600px){
    &{
      width: 65%;
      margin: 0 auto 3rem;
    }
  }
`;

export const AboutMeImage = styled.div`
  border-radius: 2rem;
  overflow: hidden;
  /* transform: rotate(10deg); */
  transition: ${props => props.theme.transition};

  &:hover{
    transform: rotate(5deg);
  }
`;

export const AboutContent = styled.div`
  @media screen and (max-width: 600px){
      &{
       text-align: center;
      }
    }
`;

export const AboutParagraph = styled.div`
  margin: 0 0 2.6rem;
  color: ${props => props.theme.light};

  svg{
    padding-top: 5px;
    color: ${props => props.theme.primary};
  }

  @media screen and (max-width: 1024px){
    &{
      margin: 0.5rem 0 1.5rem;
    }
  }
  @media screen and (max-width: 600px){
    &{
      margin: 1.5rem 0;
    }
  }
`;