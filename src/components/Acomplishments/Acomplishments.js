import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 15, text: 'Open Source Projects'},
  { number: 151, text: 'Coding questions solved', },
  { number: 5, text: 'Hackathons', },
  { number: 1215, text: 'Followers on LinkedIn', },
 /* { number: 0, text: 'Earned on Upwork', },*/
  
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Stats</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}.`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
