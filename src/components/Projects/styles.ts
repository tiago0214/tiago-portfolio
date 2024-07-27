import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 2.5rem;

  @media screen and (max-width: 1024px){
    &{
      grid-template-columns: 1fr 1fr;
      gap: 1.2rem;
    }
  }

  @media screen and (max-width: 600px){
    &{
      grid-template-columns: 1fr;
      gap: 1rem;
    }
  }
`;

export const ProjectItem = styled.article`
  background: ${props => props.theme["bg-variant"]};
  padding: 1.2rem;
  border-radius: 2rem;
  border: 1px solid transparent;
  transition: ${props => props.theme.transition};

  & > h3{
    margin: 1.2rem 0 2rem;
  }

  &:hover{
    border-color: ${props => props.theme["primary-variant"]};
    background: transparent;
  }
`;

export const ProjectItemImage = styled.div`
  border-radius: 1.5rem;
  overflow: hidden;
`;

export const ProjectItemCta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;