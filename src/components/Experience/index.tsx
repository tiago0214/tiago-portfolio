import { SealCheck } from "@phosphor-icons/react";
import { ExperienceContainer, ExperienceContent } from "./styles";

export function Experience(){
  const colorIcon = '#64CCC5';

  return (
    <section id="experience">
      <h5>Skills That I Have</h5>
      <h2>My Experience</h2>

      <ExperienceContainer className="container">
        <div>
          <h3>Frontend Development</h3>

          <ExperienceContent>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>React</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Tailwind</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>StyledComponents</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>NextJS</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>JavaScript</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>TypeScript</h4>
            </article>
          </ExperienceContent>
        </div>

        <div>
          <h3>Backend Development</h3>

          <ExperienceContent>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>NodeJS</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>TypeScript</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Express</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>C#</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>MongoDB</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>Postgres</h4>
            </article>
            <article>
              <SealCheck weight="fill" color={colorIcon}/>
              <h4>MySQL</h4>
            </article>
          </ExperienceContent>
        </div>
      </ExperienceContainer>
    </section>
  )
}