import { AboutContainer, AboutContent, AboutMe, AboutMeImage } from "./styles";

import ME from '../../assets/ME.png'

export function About(){
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <AboutContainer className="container">
        <AboutMe>
          <AboutMeImage>
            <img src={ME} alt="about image" />
          </AboutMeImage>
        </AboutMe>

        <AboutContent>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere quas, minima quasi ipsum optio nemo placeat, maxime ipsa reiciendis saepe laborum a voluptates odio voluptas ab error. Fugit, itaque.</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </AboutContent>
      </AboutContainer>
    </section>
  )
}