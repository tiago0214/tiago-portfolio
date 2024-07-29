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
  width: 22rem;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 8.0rem;
  border-radius: 12rem 12rem 1rem 1rem;
  overflow: hidden;
  padding: 3rem 1.5rem 0 1.5rem;

  box-shadow:inset 0 0 5px 2px ${props => props.theme["color-bg"]};

  background: linear-gradient(45deg,#D4F1F4,#75E6DA,#BFD7ED,#60A3D9,#21B6A8,#A3EBB1);
  background-size: 500% 500%;
  animation: color 12s ease-in-out infinite alternate;

  @keyframes color{
    0%{
      background-position: 0 50%;
    }
  }
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