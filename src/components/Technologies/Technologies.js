import React from 'react';
import { DiCss3, DiFirebase, DiGit, DiHtml5, DiJavascript, DiNodejs, DiPython, DiReact,DiMongodb,DiBootstrap} from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the web development world.
      From Back-end To Design
    </SectionText>
    <List>
      
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>C++</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiHtml5 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>HTML5</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCss3 size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>CSS3</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiJavascript size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>JavaScript</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>React JS</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiGit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Git</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiMongodb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MongoDB</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
      <ListItem>
        <picture>
          <DiNodejs size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>NodeJS</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
    <ListItem>
        <picture>
          <DiPython size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Python</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <ListItem>
        <picture>
          <DiBootstrap size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Bootstrap</ListTitle>
          <ListParagraph>
          -.-.-.-.-.-.-.-.-
          </ListParagraph>
        </ListContainer>
      </ListItem>

    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;