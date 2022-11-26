import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi there, <br />
          I'm Aryan S. JADON
        </SectionTitle>
        <SectionText>
        <span style={{ color: '#f5f5f5' }}>I'm a passionate programmer and also a 3rd year student at <b>SRM University</b>. I have a passion for learning new technologies and also a passion for building things. <br/>I am open to any kind of collaboration on interesting projects... </span>
        </SectionText>
        <Button onClick={()=>window.location='https://drive.google.com/drive/folders/1v9cFWPIvj57RTij4sFiRJeXYb9ZID5rj?usp=share_link'}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;