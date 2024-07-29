import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from './styles/themes/default.ts'
import { Header } from "./components/Header/index.tsx";
import { NavBar } from "./components/NavBar/index.tsx";
import { About } from "./components/About/index.tsx";
import { Experience } from "./components/Experience/index.tsx";
import { Projects } from "./components/Projects/index.tsx";
import { Contact } from "./components/Contact/index.tsx";
import { Footer } from "./components/Footer/index.tsx";
import { Bubbles } from "./components/Bubbles/index.tsx";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Bubbles />

      <Header />
      <NavBar />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
      <GlobalStyle />
    </ThemeProvider>
  )
}
