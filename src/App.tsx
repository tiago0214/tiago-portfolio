import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme, orangeTheme, beigeTheme, blueTheme, purpleTheme } from './styles/themes/default.ts'
import { Header } from "./components/Header/index.tsx";
import { NavBar } from "./components/NavBar/index.tsx";
import { About } from "./components/About/index.tsx";
import { Experience } from "./components/Experience/index.tsx";
import { Projects } from "./components/Projects/index.tsx";
import { Contact } from "./components/Contact/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { Bubbles } from "./components/Bubbles/index.tsx";
import { useState } from "react";
// import { AppContextProvider } from "./context/index.tsx";

export function App() {
  const [themeColorState, setThemeColorState] = useState<ColorTheme>('default');

  type ColorTheme = 'default' | 'orange' | 'beige' | 'blue' | 'purple';

  type ColorThemeReturn = typeof defaultTheme;

  function themeColor (props:ColorTheme): ColorThemeReturn{
    switch(props){
      case "default":
        return defaultTheme;
      case "orange":
        return orangeTheme;
      case "beige":
        return beigeTheme;
      case "blue":
        return blueTheme
      case "purple":
        return purpleTheme
      default: 
        return defaultTheme
    }
  }

  const activeTheme = themeColor(themeColorState);
  const activeColor = activeTheme["primary-variant"]

  function changeTheme(theme:ColorTheme){
    return setThemeColorState(theme)
  }

 
  return (
    <ThemeProvider theme={activeTheme}>
      {/* <AppContextProvider> */}
        <Bubbles />
        <Header />
        <NavBar themeSelect={changeTheme} activeColor={activeColor}/>
        <About />
        <Experience activeColor={activeColor}/>
        <Projects />
        <Contact />
        <Footer />
      {/* </AppContextProvider> */}
      <GlobalStyle />
    </ThemeProvider>
  )
}
