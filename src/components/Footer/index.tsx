import React from 'react';
import { Box } from '../Globals';
import * as Styled from './style';

interface Props {
  dark: boolean;
}

const Seb = (
	<a href="https://www.instagram.com/frostbelt/">Sebastien</a>
);

const Guillaume = (
	<a href="https://www.instagram.com/epgui/">Guillaume</a>
);

const Footer: React.FC<Props> = ({ dark }) => (
  <Styled.Footer color={dark ? "#000" : "#FFF"}>
    <Box p={[6, 6, 8]} fontSize={0}>
      {Seb} and {Guillaume} are two scientists who love taking pictures.
    </Box>
  </Styled.Footer>
);

export default Footer;
