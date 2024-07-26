import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: ${props => props.theme["gray-900"]};
    color: ${props => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  :focus{
    outline: 0;
  }

  body, input, textarea, button {
    font-family: "JetBrains Mono", monospace;
    font-weight: 400;
    font-size: 1rem;
  }

`;