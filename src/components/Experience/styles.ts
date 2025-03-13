import styled from "styled-components";

export const ExperienceContainer = styled.div`
  width: 940px;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1200px){
   width: 90%;
  }

  /* @media screen and (min-width: 601px){
    width: 80%;
  }

  @media screen and (max-width: 600px){
    width: 80%;
  } */
`;

export const TechIcon = styled.div`
  background: ${props => props.theme["bg-variant"]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid transparent;

  width: 8rem;
  height: 8rem;

  transition: ${props => props.theme.transition};

  &:hover{
    background: rgb(0,0,0,0.2);
    border-color: ${props => props.theme["primary-variant"]};
  }
`


// export const ExperienceContent = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 1fr;
//   /* row-gap: 2rem; */
//   gap: 2rem;

//   article{
//     display: flex;
//     gap: 1rem;
//     align-items: center;
//   }

//   @media screen and (max-width: 1024px){
//     &{
//       padding: 1rem;
//     }
//   }
//   @media screen and (max-width: 600px){
//     &{
//       gap: 0;
//       padding: 0 0.5rem 1rem 0.5rem;
//     }
//   }
// `