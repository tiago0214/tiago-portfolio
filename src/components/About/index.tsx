import { AboutContainer, AboutContent, AboutMe, AboutMeImage, AboutParagraph } from "./styles";

import ME from '../../assets/about.png'
import { ArrowCircleRight } from "@phosphor-icons/react";

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
          <AboutParagraph>
            <p><ArrowCircleRight/> Greetings, My academic journey has been a dynamic transition from a Bachelor's degree in Law to Software Engineering.</p>
            <p><ArrowCircleRight/> With a focus on web development, I work as a full-stack developer and specialize in backend languages such as JavaScript/Node.js and C#, as well as frontend development using HTML and CSS. Proficient in code versioning tools such as Git and GitHub, I also have experience with containerization using Docker.</p>
            <p><ArrowCircleRight/> Currently, I am pursuing a degree in Software Engineering at Uninter, complementing my legal background. This educational journey has equipped me with a diverse set of skills, preparing me for the challenges and opportunities.</p>
          </AboutParagraph>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </AboutContent>
      </AboutContainer>
    </section>
  )
}