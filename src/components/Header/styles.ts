import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 100vh;
  padding-top: 7rem;
  overflow: hidden;

  @media screen and (max-width: 1024px){
    &{
      height: 68vh;
    }
  }
  @media screen and (max-width: 600px){
    &{
      height: 100vh;
    }
  }
`

export const HeaderContent = styled.div`
  text-align: center;
  height: 100%;
  position: relative;
`;

export const MeContainer = styled.div`
  background: linear-gradient(${props => props.theme.primary}, transparent);
  width: 22rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 7.5rem;
  border-radius: 12rem 12rem 0 0;
  overflow: hidden;
  padding: 2rem 1.5rem 1.5rem 1.5rem;
  /* height: 30rem; */
`

export const ScrollDownLink = styled.a`
  position: absolute;
  right: -2.3rem;
  bottom: 5rem;
  transform: rotate(90deg);
  font-weight: 300;
  font-size: 0.9rem;

  @media screen and (max-width: 600px){
    &{
      display: none;
    }
  }
`