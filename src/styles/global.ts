import { createGlobalStyle } from "styled-components";

import img from './../assets/bg-texture.png'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    list-style: none;
    text-decoration: none;
  }

  body{
    background-color: ${props => props.theme["color-bg"]};
    color: ${props => props.theme.white};
    line-height: 1.7;
    -webkit-font-smoothing: antialiased;
    background-image: url(${img});
  }

  html{
    scroll-behavior: smooth;
  }

  :focus{
    outline: 0;
  }

  body, input, textarea, button {
    font-family: "JetBrains Mono", monospace;
    font-weight: 400;
    font-size: 1rem;
  }

  ::-webkit-scrollbar{
    display: none;
  }

  .container{
    width: ${props => props.theme["container-width-lg"]};
    margin: 0 auto;
  }

  h1,h2,h3,h4,h5{
    font-weight: 500;
  }

  h1{
    font-size: 2.5rem;
  }

  section{
    margin-top: 8rem;
  }

  section > h2, section > h5{
    text-align: center;
    color: ${props => props.theme.light}
  }

  section > h2 {
    color: ${props => props.theme.primary};
    margin-bottom: 3rem;
  }

  .text-light{
    color: ${props => props.theme.light}
  }

  a{
    color: ${props => props.theme.primary};
    transition: ${props => props.theme.transition};

    &:hover{
    color: ${props => props.theme.white};
    }
  }

  .bnt{
    width: max-content;
    display: inline-block;
    color: ${props => props.theme.primary};
    padding: 0.75rem 1.2rem;
    border-radius: 0.4rem;
    cursor: pointer;
    border: 1px solid ${props => props.theme.primary};
    transition: ${props => props.theme.transition};

    &:hover{
    background-color: ${props => props.theme.white};
    color: ${props => props.theme["color-bg"]};
    border-color: transparent;
    }
  }

  .btn-primary{
    background: ${props => props.theme.primary};
    color: ${props => props.theme["color-bg"]}
  }

  img{
    display: block;
    width: 100%;
    object-fit: cover;
  }

  @media screen and (max-width: 1024px){
    .container{
      width: ${props => props.theme["container-width-md"]};
    }

    section{
      margin-top: 6rem;
    }
  }

  @media screen and (max-width: 600px){
    .container{
      width: ${props => props.theme["container-width-sm"]};
    }

    section > h2{
      margin-bottom: 2rem;
    }
  }
`;