import React from 'react';
import {Section, SectionDivider, SectionTitle} from '../../styles/GlobalComponents';
import {Box, Boxes, BoxNum, BoxText} from './AcomplishmentsStyles';

/*const data = [
  { number: 20, text: 'Knowledge of Javascript frameworks like  React.js\n' +
          'and experience with SQL databases;'},
  { number: 1000, text: 'Students', },
  { number: 1900, text: 'Github Followers', },
  { number: 5000, text: 'Good communication skills both in Italian and English;', }
];*/

const Acomplishments = () => (
  <Section>
  {/*  <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>*/}
  </Section>
);

export default Acomplishments;
